# Standard Library
import requests
import json

# Third Party
from django.core.mail import send_mail
from django.conf import settings
from apscheduler.schedulers.blocking import BlockingScheduler
from tzlocal import get_localzone


tz = get_localzone()
print(tz)
sched = BlockingScheduler(timezone=tz)


@sched.scheduled_job('cron', day_of_week='mon-sun', hour=20, minute=47)
def scheduled_job():
    try:
        result = json.loads(requests.get(
            'https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/CovidStatisticsProfileHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&orderByFields=date desc&outSR=4326&f=json'
        ).text)
        dailyCases = result['features'][0]['attributes']['ConfirmedCovidCases']
        print(f'There are {dailyCases} today, sent to: ')
        
        send_mail(
            'Covid Cases', 
            f'There are {dailyCases} today', 
            settings.EMAIL_HOST_USER, 
            ["shmaffle06@yahoo.co.uk"],
            fail_silently=False)
    except Exception as e:
        print(e)

sched.start()