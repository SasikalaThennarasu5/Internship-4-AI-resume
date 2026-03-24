from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    message = models.TextField()
    image = models.ImageField(upload_to='testimonials/', null=True, blank=True)
    rating = models.IntegerField(default=5)

    def __str__(self):
        return self.name