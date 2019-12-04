from django.db import models
from django.contrib.auth import get_user_model


class LearningSet(models.Model):
    name = models.CharField(max_length=100, blank=False)
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, blank=True)
    creation_date = models.DateField(auto_now_add=True)


class Item(models.Model):
    term = models.CharField(max_length=100, blank=False)
    definition = models.TextField()
    learning_set_id = models.ForeignKey(LearningSet, on_delete=models.CASCADE)
