from django.db import models
from django.contrib.auth.models import User

class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)  # ✅ ADD THIS

    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    skills = models.TextField()
    experience = models.TextField()
    template = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name