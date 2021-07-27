# Standard Library
from time import sleep
import requests
import json

# Third Party
from celery import shared_task
from celery.exceptions import SoftTimeLimitExceeded
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings


@shared_task
def send_email(recipients):
    try:
        result = json.loads(requests.get(
            'https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=date desc&outSR=4326&f=json'
        ).text)
        dailyCases = result['features'][0]['attributes']['ConfirmedCovidCases']
        print(f'There are {dailyCases} today, sent to: {recipients}')
        
        send_mail(
            'Covid Cases', 
            f'There are {dailyCases} today', 
            settings.EMAIL_HOST_USER, 
            [recipients],
            fail_silently=False)
    except SoftTimeLimitExceeded as e:
        print(e)

    return None
