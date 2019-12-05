from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, ListAPIView
from learning_cards import models
from . import serializers
from rest_framework import status
from rest_framework.exceptions import NotAcceptable
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

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class LearningSetRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = models.LearningSet.objects.all()
    serializer_class = serializers.LearningSetReadOnlyOwnerSerializer

    def perform_update(self, serializer):
        if self.request.user.id == self.queryset.get(pk=self.kwargs.get('pk', None)).owner.id:
            return serializer.save()
        else:
            raise NotAcceptable("Cannot edit sets which belong to other users")

    def perform_destroy(self, instance):
        if self.request.user.id == self.queryset.get(pk=self.kwargs.get('pk', None)).owner.id:
            return instance.delete()
        else:
            raise NotAcceptable("Cannot remove sets which belong to other users")


class ItemsListAPIView(ListAPIView):
    serializer_class = serializers.ItemSerializer

    def get_queryset(self):
        queryset = models.Item.objects.all()
        set_id = self.request.query_params.get('set_id', None) or self.request.query_params.get('learning_set_id', None)
        if set_id is None:
            return queryset
        else:
            queryset = queryset.filter(learning_set_id=set_id)
            return queryset


class ItemsCreateAPIView(CreateAPIView):
    serializer_class = serializers.ItemListSerializer


class ItemRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = models.Item.objects.all()
    serializer_class = serializers.ItemSerializer
