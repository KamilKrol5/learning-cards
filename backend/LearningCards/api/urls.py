from django.urls import path

from .views import LearningSetsListAPIView, ItemsListAPIView, LearningSetRetrieveUpdateDestroyAPIView,\
    ItemRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('sets/', LearningSetsListAPIView.as_view()),
    path('sets/<pk>', LearningSetRetrieveUpdateDestroyAPIView.as_view()),
    path('items/', ItemsListAPIView.as_view()),
    path('items/<pk>', ItemRetrieveUpdateDestroyAPIView.as_view())
]
