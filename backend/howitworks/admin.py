from django.contrib import admin
from .models import Step

@admin.register(Step)
class StepAdmin(admin.ModelAdmin):
    list_display = ("title",)