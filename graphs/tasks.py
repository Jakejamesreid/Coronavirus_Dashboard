from celery import shared_task
from time import sleep
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings


@shared_task
def sleepy(duration):
    sleep(duration)
    return HttpResponse('<h1>TASK IS DONE</h1>')

@shared_task
def send_email_task():
    sleep(10)
    send_mail('Celery task worked', 'This is proof it worked', settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER])
    return None
