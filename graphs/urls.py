from django.urls import path
from graphs import views

urlpatterns = [
    path('', views.graphs, name="graphs"),
    path('email/', views.email, name="email"),
]
