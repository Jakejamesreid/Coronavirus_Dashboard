from django.contrib import admin
from .models import Newsletter


class NewsletterAdmin(admin.ModelAdmin):

    class Meta:
        verbose_name_plural = "Categories"

    list_display = ('email',)
    field = ('email',)


admin.site.register(Newsletter, NewsletterAdmin)
