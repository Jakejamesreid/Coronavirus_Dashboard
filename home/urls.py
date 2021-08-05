from django.urls import path, re_path
from home import views


urlpatterns = [
    path('', views.home, name="home"),
    path('newsletter/', views.newsletter, name="newsletter"),
    path('unsubscribe/<uuid:subscriber_uuid>', views.unsubscribe, name="unsubscribe"),
]
