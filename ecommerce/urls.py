from django.urls import path

from ecommerce import views
from .views import *

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("category-wise-products/<int:cat_id>/", CategoryWiseProductView.as_view(), name="CategorywiseProducts"),
    path("shop/", ShopView.as_view(), name="shop"),
    path("category/", CategoryView.as_view(), name="category"),
    path("subcategory/", SubcategoryView.as_view(), name="subcategory"),
    path("favourites/", FavoriteProductsView.as_view(), name="favourites"),
    path("login/", LoginView.as_view(), name="login"),
    path("registration/", RegistrationView.as_view(), name="registration"),
    path("search/", SearchPageView.as_view(), name="search"),
    path("cart/", CartView.as_view(), name="cart"),
    path("delete-cart/", delete_cart, name="deleteCart"),


    ## All Action's URL goes here
    path("add-to-cart/", add_to_cart, name="addToCart"),
    path("plus-quantity/", plus_button, name="PlusButton"),
    path("minus-button/", minus_button, name="MinusButton"),
    path("add-to-favorite/", add_to_favorite, name="addToFavorite"),
]
