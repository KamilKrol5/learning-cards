from django.urls import path

from . import views

urlpatterns = [
    path('sets/', views.LearningSetsListAPIView.as_view()),
    path('sets/<pk>', views.LearningSetRetrieveUpdateDestroyAPIView.as_view()),
    path('items/', views.ItemsListAPIView.as_view()),
    path('items/add', views.ItemsCreateAPIView.as_view()),
    path('items/<pk>', views.ItemRetrieveUpdateDestroyAPIView.as_view()),
    path('register/', views.RegisterAPIView.as_view())
]
