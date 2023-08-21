from django.urls import path
from menu.views import recipes_list, recipe_details, delete_recipe


urlpatterns = [
    path("", recipes_list, name="recipes-list"),
    path("recipe/<int:id>", recipe_details, name="recipe-details"),
    path("recipe/<int:id>/delete", delete_recipe, name="delete-recipe"),
]
