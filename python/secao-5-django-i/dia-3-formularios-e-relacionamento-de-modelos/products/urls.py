from django.urls import path
from products.views import index, product, seller, buyer, order


urlpatterns = [
    path("", index, name="index"),
    path("product", product, name="product"),
    path("seller", seller, name="seller"),
    path("buyer", buyer, name="buyer"),
    path("order", order, name="order"),
]
