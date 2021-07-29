from django.shortcuts import render
from django.http import HttpResponse
from .models import Newsletter
# Standard Library
from time import sleep
import requests
import json

# Third Party
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from apscheduler.schedulers.blocking import BlockingScheduler

sched = BlockingScheduler()


def home(request):
    return render(request, "home/index.html")

def newsletter(request):
    if request.method == 'POST' and 'email' in request.POST:
        email = Newsletter(email=request.POST['email'])
        try:
            email.save()
            response = {
                'status': 200,
            }
        except:
            return HttpResponse(status=400)
    return HttpResponse(status=200)

