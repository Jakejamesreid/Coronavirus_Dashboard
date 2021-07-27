from django.shortcuts import render
from django.http import HttpResponse
from .tasks import send_email
from .models import Newsletter


def home(request):
    return render(request, "home/index.html")

def newsletter(request):
    try:
        if request.method == 'POST':
            email = Newsletter(email=request.POST['email'])
            email.save()
        email = Newsletter.objects.get(email=request.POST['email'])
        return HttpResponse(status=200)
    except Exception as e:
        print(request, 'Sorry, your email cannot be added.')
        return HttpResponse(content=e, status=400)

def email(request, recipient):
    send_email.delay(recipient)
    return HttpResponse('<h1>email has been sent</h1>')