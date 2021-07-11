from django.urls import path
from maps import views

urlpatterns = [
    path('', views.interactive_map, name="interactive_map"),
]
