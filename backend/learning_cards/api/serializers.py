from rest_framework import serializers

from learning_cards.models import LearningSet, Item, get_user_model


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, allow_blank=False, allow_null=False)

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        user = get_user_model().objects.create_user(username=username, password=password,
                                                    email=email)
        return user

    class Meta:
        model = get_user_model()
        fields = ['username', 'email', 'password']


class LearningSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningSet
        fields = ['id', 'name', 'owner', 'creation_date']
        read_only_fields = ['id']


class LearningSetReadOnlyOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningSet
        fields = ['id', 'name', 'owner', 'creation_date']
        read_only_fields = ['owner']


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'term', 'definition', 'learning_set_id']
        read_only_fields = ['id']


class ItemListSerializer:
    def __new__(cls, *args, **kwargs):
        kwargs['many'] = True
        return ItemSerializer(*args, **kwargs)
