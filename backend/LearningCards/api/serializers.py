from rest_framework import serializers
from LearningCards.models import LearningSet, Item, get_user_model
from rest_framework.exceptions import ValidationError


class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data.get('email', None)
        if email is None:
            raise ValidationError(detail="Email field cannot be empty")
        else:
            user = get_user_model().objects.create_user(username=username, password=validated_data['password'],
                                                        email=email)
            return user

    class Meta:
        model = get_user_model()
        fields = ['username', 'email', 'password']


class LearningSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningSet
        fields = ['id', 'name', 'owner', 'creation_date']


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'term', 'definition', 'learning_set_id']
