from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from LearningCards import models
from . import serializers
from rest_framework import status
from django.contrib.auth import get_user_model


class RegisterAPIView(CreateAPIView):
    serializer_class = serializers.UserSerializer
    model = get_user_model()

    def create(self, request, *args, **kwargs):
        response = super(RegisterAPIView, self).create(request, *args, **kwargs)
        response.status = status.HTTP_200_OK
        response.data = {'User created'}
        return response


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
    serializer_class = serializers.ItemSerializer

    def get_queryset(self):
        queryset = models.Item.objects.all()
        set_id = self.request.query_params.get('set_id', None) or self.request.query_params.get('learning_set_id', None)
        if set_id is None:
            return queryset
        else:
            queryset = queryset.filter(learning_set_id=set_id)
            return queryset


class ItemRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = models.Item.objects.all()
    serializer_class = serializers.ItemSerializer
