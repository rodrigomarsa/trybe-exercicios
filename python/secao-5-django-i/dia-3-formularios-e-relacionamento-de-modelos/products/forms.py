from django import forms
from .models import Product, Seller, Buyer, Order


class CreateProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = "__all__"


class CreateSellerForm(forms.ModelForm):
    class Meta:
        model = Seller
        fields = "__all__"


class CreateBuyerForm(forms.ModelForm):
    class Meta:
        model = Buyer
        fields = "__all__"


class CreateOrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = "__all__"
