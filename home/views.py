from django.shortcuts import render
from django.http import HttpResponse
from .tasks import send_email


def home(request):
    return render(request, "home/index.html")


def email(request):
    send_email.delay()
    return HttpResponse('<h1>email has been sent</h1>')