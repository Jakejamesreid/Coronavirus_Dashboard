from django.db import models


class Newsletter(models.Model):
    email = email = models.EmailField(max_length=254, null=False, blank=False, unique=True)