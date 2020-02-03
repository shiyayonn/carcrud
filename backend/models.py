from django.db import models

# Create your models here.
class car_spec(models.Model):
    car_color = models.CharField(max_length=20, blank=True, null=True)
    car_number = models.IntegerField(blank=True, null=True)

def __str__(self):
    return self.task