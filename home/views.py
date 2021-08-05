from django.shortcuts import render
from django.http import HttpResponse
from .models import Newsletter
from .forms import NewsletterForm

# Standard Library
from time import sleep
import requests
import json

# Third Party
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from django.core import serializers

from django.contrib.sites.models import Site
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string


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

def home(request):
    form = NewsletterForm()
    # scheduled_job()
    return render(request, "home/index.html", {"form": form})

def newsletter(request):
    if request.is_ajax and request.method == "POST":
        form = NewsletterForm(request.POST)
        if form.is_valid():
            instance = form.save()
            # serialize in new friend object in json
            ser_instance = serializers.serialize('json', [ instance, ])
            # send to client side.
            return JsonResponse({"instance": ser_instance}, status=200)
        else:
            # some form errors occured.
            return JsonResponse({"error": form.errors}, status=400)

def unsubscribe(request, subscriber_uuid):
    subscriber = Newsletter.objects.filter(id=subscriber_uuid)
    subscriber.delete()
    return render(request, "home/unsubscribe.html")
