from django.db import models

class Feature(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.ImageField(upload_to="features/", blank=True, null=True)

    def __str__(self):
        return self.title