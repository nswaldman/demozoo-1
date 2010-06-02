from django import forms
from demoscene.models import Production, ProductionType, Platform, Releaser, DownloadLink
from django.forms.models import inlineformset_factory

class ProductionForm(forms.ModelForm):
	class Meta:
		model = Production
		fields = ('title', )
		
class ProductionTypeForm(forms.Form):
	production_type = forms.ModelChoiceField(queryset = ProductionType.objects.order_by('name'))

ProductionTypeFormSet = forms.formsets.formset_factory(ProductionTypeForm, can_delete = True)

class ProductionPlatformForm(forms.Form):
	platform = forms.ModelChoiceField(queryset = Platform.objects.order_by('name'))

ProductionPlatformFormSet = forms.formsets.formset_factory(ProductionPlatformForm, can_delete = True)

DownloadLinkFormSet = inlineformset_factory(Production, DownloadLink, extra=1)


class GroupForm(forms.ModelForm):
	class Meta:
		model = Releaser
		fields = ('name', )


class ScenerForm(forms.ModelForm):
	class Meta:
		model = Releaser
		fields = ('name', )
