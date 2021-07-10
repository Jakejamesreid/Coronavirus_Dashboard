from django.urls import path
from Coronavirus_Dashboard.graphs import views

urlpatterns = [
    path('', views.graphs, name="graphs"),
]
