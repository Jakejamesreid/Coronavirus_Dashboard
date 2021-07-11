from django.shortcuts import render
from django.http import HttpResponse


def interactive_map(request):
    return render(request, "maps/interactive_map.html")
