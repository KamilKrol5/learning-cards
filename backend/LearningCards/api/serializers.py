from rest_framework import serializers
from LearningCards.models import LearningSet, Item


class LearningSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningSet
        fields = ['id', 'name', 'owner', 'creation_date']


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'term', 'definition', 'learning_set_id']
