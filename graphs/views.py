from django.shortcuts import render
from django.http import HttpResponse


def graphs(request):
    return render(request, "graphs/dashboard_graphs.html")
