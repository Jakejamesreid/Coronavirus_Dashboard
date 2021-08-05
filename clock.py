# Project
from home.models import Newsletter

# Standard Library
import requests
import json

# Third Party
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.contrib.sites.models import Site
from apscheduler.schedulers.blocking import BlockingScheduler
from tzlocal import get_localzone


sched = BlockingScheduler(timezone=get_localzone())

@sched.scheduled_job('cron', day_of_week='mon-sun', hour=20, minute=30)
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
    except Exception as e:
        print(e)

sched.start()