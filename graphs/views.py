from django.shortcuts import render
from django.http import HttpResponse

from .tasks import sleepy, send_email_task

def email(request):
    send_email_task.delay()
    return HttpResponse('<h1>email has been sent</h1>')

def graphs(request):
    return render(request, "graphs/dashboard_graphs.html")
