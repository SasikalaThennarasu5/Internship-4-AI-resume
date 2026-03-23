from django.urls import path
from .views import StepListView

urlpatterns = [
    path("", StepListView.as_view()),
]