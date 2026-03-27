from django.urls import path
from .views import RegisterView
from .views import email_login
from .views import GoogleLoginView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', email_login),
    path("google/", GoogleLoginView.as_view()),
]