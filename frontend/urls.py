from django.urls import path

from .views import index, cardetailview

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', cardetailview.as_view()),
    path('delete/<int:pk>', cardetailview.as_view()),
]
