from django.db import models

class Step(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.ImageField(upload_to="steps/", blank=True, null=True)

    def __str__(self):
        return self.title