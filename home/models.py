from django.db import models
import uuid


class Newsletter(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = email = models.EmailField(max_length=254, null=False, blank=False, unique=True)