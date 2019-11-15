from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from LearningCards import models
from . import serializers


class LearningSetsListAPIView(ListCreateAPIView):
    serializer_class = serializers.LearningSetSerializer

    def get_queryset(self):
        queryset = models.LearningSet.objects.all()
        owner = self.request.user.id
        name = self.request.query_params.get('search', '')
        queryset = queryset.filter(owner=owner, name__contains=name)
        return queryset


class LearningSetRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = models.LearningSet.objects.all()
    serializer_class = serializers.LearningSetSerializer


class ItemsListAPIView(ListCreateAPIView):
    queryset = models.Item.objects.all()
    serializer_class = serializers.ItemSerializer


class ItemRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = models.Item.objects.all()
    serializer_class = serializers.ItemSerializer
