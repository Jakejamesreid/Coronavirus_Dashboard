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
from apscheduler.schedulers.blocking import BlockingScheduler
from django.http import JsonResponse
from django.core import serializers


sched = BlockingScheduler()

def home(request):
    form = NewsletterForm()
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


