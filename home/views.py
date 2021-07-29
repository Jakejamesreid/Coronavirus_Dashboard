from django.shortcuts import render
from django.http import HttpResponse
from .tasks import send_email
from .models import Newsletter


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

def email(request, recipient):
    send_email.delay(recipient)
    return HttpResponse('<h1>email has been sent</h1>')