from django.urls import path
from Coronavirus_Dashboard.home import views

urlpatterns = [
    path('', views.home, name="home"),
]
