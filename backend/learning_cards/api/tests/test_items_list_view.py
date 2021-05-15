from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from learning_cards.api.serializers import LearningSetSerializer, ItemSerializer
from learning_cards.api.tests.utils import create_dummy_items
from learning_cards.models import LearningSet

ITEMS_LIST_URL = reverse('items_list')


class ItemsListApiViewTest(APITestCase):
    def setUp(self) -> None:
        self.user = get_user_model().objects.create(username='test_user')
        self.set1 = LearningSet.objects.create(name='test_learning_set', owner=self.user)
        self.set1_items = create_dummy_items(10, self.set1)

    def test_retrieving_all_set_items(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(f'{ITEMS_LIST_URL}?set_id={self.set1.id}')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertCountEqual(
            response.data,
            ItemSerializer(many=True).to_representation(self.set1_items)
        )

