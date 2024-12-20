
# Create your models here.

from django.db import models

class Apartment(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='apartments/')

    def __str__(self):
        return self.name