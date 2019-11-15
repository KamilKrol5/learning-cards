from django.urls import path

from .views import LearningSetsListAPIView, ItemsListAPIView

urlpatterns = [
    path('sets/', LearningSetsListAPIView.as_view()),
    # path('sets/<pk>', LearningSetsListAPIView.as_view()),
    path('items/', ItemsListAPIView.as_view()),
    # path('items/<pk>', ItemsListAPIView.as_view())
]
