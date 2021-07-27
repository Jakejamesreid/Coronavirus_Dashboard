from django.urls import path, re_path
from home import views


urlpatterns = [
    path('', views.home, name="home"),
    path('newsletter/', views.newsletter, name="newsletter"),
    re_path(r'^email/(?P<recipient>[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})/$', views.email, name="email"),
]
