from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from learning_cards.api.tests.utils import create_dummy_items
from learning_cards.models import LearningSet, Item

ADD_ITEMS_URL = reverse('add_item')


class ItemCreateApiViewTest(APITestCase):
    def setUp(self) -> None:
        self.user = get_user_model().objects.create(username='test_user')
        self.set1 = LearningSet.objects.create(name='test_learning_set', owner=self.user)
        self.set1_items = create_dummy_items(3, self.set1)

    def test_add_single_item_to_set(self):
        self.client.force_authenticate(user=self.user)
        item_input = {"term": "term1", "definition": "def1", "learning_set_id": self.set1.id}
        set1_len = len(Item.objects.filter(learning_set_id=self.set1))
        response = self.client.post(
            ADD_ITEMS_URL,
            str([item_input]).replace('\'', '"'),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(response.data)
        self.assertTrue(len(Item.objects.filter(learning_set_id=self.set1)), set1_len + 1)
        self.assertTrue(Item.objects.filter(**item_input).exists())

    def test_add_multiple_items_to_set(self):
        self.client.force_authenticate(user=self.user)
        item1_input = {"term": "term1", "definition": "def1", "learning_set_id": self.set1.id}
        item2_input = {"term": "term2", "definition": "def2", "learning_set_id": self.set1.id}
        set1_len = len(Item.objects.filter(learning_set_id=self.set1))
        response = self.client.post(
            ADD_ITEMS_URL,
            str([item1_input, item2_input]).replace('\'', '"'),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(len(response.data), 2)
        self.assertTrue(len(Item.objects.filter(learning_set_id=self.set1)), set1_len + 21)
        self.assertTrue(Item.objects.filter(**item1_input).exists())
        self.assertTrue(Item.objects.filter(**item2_input).exists())
