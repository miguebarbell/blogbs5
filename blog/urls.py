from django.urls import path
from .views import BlogPostListView, BlogPostDetailView, BlogPostFeaturedView, BlogPostCategoryView, get_categories

urlpatterns = [
    path('categories', get_categories),
    path('', BlogPostListView.as_view()),
    path('featured', BlogPostFeaturedView.as_view()),
    path('category', BlogPostCategoryView.as_view()),
    path('<slug>', BlogPostDetailView.as_view()),

]