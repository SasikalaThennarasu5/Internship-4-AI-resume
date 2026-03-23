from django.urls import path
from .views import TemplateListView, TemplatePreviewView

urlpatterns = [
    path('', TemplateListView.as_view()),
    path('preview/', TemplatePreviewView.as_view())
]