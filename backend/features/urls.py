from django.urls import path
from .views import FeatureListView

urlpatterns = [
    path("", FeatureListView.as_view()),
]