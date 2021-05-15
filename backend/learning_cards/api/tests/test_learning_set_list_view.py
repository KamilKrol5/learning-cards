from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from learning_cards.api.serializers import LearningSetSerializer
from learning_cards.models import LearningSet

SETS_LIST_URL = reverse('sets_list')


class LearningSetListApiViewTest(APITestCase):
    def setUp(self) -> None:
        self.user = get_user_model().objects.create(username='test_user')
        self.set1 = LearningSet.objects.create(name='test_learning_set', owner=self.user)
        self.set2 = LearningSet.objects.create(name='test_learning_set', owner=self.user)

    def test_retrieving_all_users_learning_sets(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(SETS_LIST_URL)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertCountEqual(
            response.data,
            [
                LearningSetSerializer().to_representation(self.set1),
                LearningSetSerializer().to_representation(self.set2)
            ]
        )

    def test_create_set(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.post(
            f'{SETS_LIST_URL}',
            LearningSetSerializer().to_representation(self.set1)
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['name'], self.set1.name)
        self.assertEqual(response.data['owner'], self.set1.owner.id)
