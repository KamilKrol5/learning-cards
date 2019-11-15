from rest_framework.generics import ListCreateAPIView
from LearningCards import models
from . import serializers


class LearningSetsListAPIView(ListCreateAPIView):
    queryset = models.LearningSet.objects.all()
    serializer_class = serializers.LearningSetSerializer


class ItemsListAPIView(ListCreateAPIView):
    queryset = models.Item.objects.all()
    serializer_class = serializers.ItemSerializer
