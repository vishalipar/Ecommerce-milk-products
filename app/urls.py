from django.urls import path

from . import views

urlpatterns = [
    path('', views.home),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('category/<slug:val>/', views.CategoryView.as_view(), name='category'),
    path('category-title/<val>/', views.CategoryTitle.as_view(), name='category-title'),
    path('product-detail/<int:pk>/', views.ProductDetail.as_view(), name='product-detail'),
    
    path('registration/', views.CustomerRegistrationView.as_view(), name='customerregistration'),
]
