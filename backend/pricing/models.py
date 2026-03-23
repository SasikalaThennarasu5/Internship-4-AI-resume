from django.db import models

class Plan(models.Model):
    PLAN_TYPES = (
        ('monthly', 'Monthly'),
        ('yearly', 'Yearly'),
    )

    name = models.CharField(max_length=50)
    plan_type = models.CharField(max_length=10, choices=PLAN_TYPES)
    price = models.IntegerField()
    description = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} - {self.plan_type}"