from django.db import models

class Template(models.Model):
    CATEGORY_CHOICES = (
        ('modern', 'Modern'),
        ('professional', 'Professional'),
        ('minimal', 'Minimal'),
        ('creative', 'Creative'),
    )

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='templates/', null=True, blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    is_pro = models.BooleanField(default=False)

    def __str__(self):
        return self.name