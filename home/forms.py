from .models import Newsletter
from django import forms
import datetime

class NewsletterForm(forms.ModelForm):
    ## change the widget of the date field.
    email = forms.CharField(
        label='Email', 
    )
    
    def __init__(self, *args, **kwargs):
        super(NewsletterForm, self).__init__(*args, **kwargs)
        ## add a "form-control" class to each form input
        ## for enabling bootstrap
        for name in self.fields.keys():
            self.fields[name].widget.attrs.update({
                'class': 'form-control',
            })
            if name is "email":
                self.fields[name].widget.attrs['placeholder'] = "Email"
            

    class Meta:
        model = Newsletter
        fields = ("__all__")