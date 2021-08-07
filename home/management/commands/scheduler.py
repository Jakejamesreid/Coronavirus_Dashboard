# Project
from home.models import Newsletter

# Standard Library
import requests
import logging
import json

# Third Party
import django
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.contrib.sites.models import Site
from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.triggers.cron import CronTrigger
from django.core.management.base import BaseCommand
from django_apscheduler.jobstores import DjangoJobStore
from django_apscheduler.models import DjangoJobExecution
from django_apscheduler import util


django.setup()
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.NOTSET)

def scheduled_job():
    url = 'https://services1.arcgis.com/'
    endpoint = 'eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query'
    query = '?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=date desc&outSR=4326&f=json'
    try:
        result = json.loads(
            requests.get(url+endpoint+query).text
        )
        daily_cases = result['features'][0]['attributes']['ConfirmedCovidCases']
        domain = Site.objects.get_current().domain
        subscribers = Newsletter.objects.all()

        for subscriber in subscribers:
            body = render_to_string(
                'home/newsletter_emails/newsletter_body.html',
                {'daily_cases': daily_cases, 'subscriber': subscriber, 'domain': domain})
            send_mail(
                'Covid Cases', 
                body, 
                settings.EMAIL_HOST_USER, 
                [subscriber.email],
                html_message=body,
                fail_silently=False)
        
        logger.info('Emails sent')
    except Exception as e:
        print(e)
        logger.error(e)


# The `close_old_connections` decorator ensures that database connections, that have become
# unusable or are obsolete, are closed before and after our job has run.
@util.close_old_connections
def delete_old_job_executions(max_age=604_800):
    """
    This job deletes APScheduler job execution entries older than `max_age` from the database.
    It helps to prevent the database from filling up with old historical records that are no
    longer useful.

    :param max_age: The maximum length of time to retain historical job execution records.
                    Defaults to 7 days.
    """
    DjangoJobExecution.objects.delete_old_job_executions(max_age)

class Command(BaseCommand):
  help = "Runs APScheduler."

  def handle(self, *args, **options):
    scheduler = BlockingScheduler(timezone=settings.TIME_ZONE)
    scheduler.print_jobs()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    scheduler.add_job(
        scheduled_job,
        'cron', day_of_week='mon-sun', hour=20, minute=30,
        id="scheduled_job",
        max_instances=1,
        replace_existing=True,
    )
    logger.info("Added job 'scheduled_job'.")

    scheduler.add_job(
        delete_old_job_executions,
        trigger=CronTrigger(
            day_of_week="mon", hour="00", minute="00"
        ),  # Midnight on Monday, before start of the next work week.
        id="delete_old_job_executions",
        max_instances=1,
        replace_existing=True,
    )
    logger.info(
        "Added weekly job: 'delete_old_job_executions'."
    )

    try:
        logger.info("Starting scheduler...")
        scheduler.start()
    except KeyboardInterrupt:
        logger.info("Stopping scheduler...")
        scheduler.shutdown()
        logger.info("Scheduler shut down successfully!")
