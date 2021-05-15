import random
from typing import List, Union

from learning_cards.models import Item, LearningSet


def create_dummy_items(count: int, set_: LearningSet) -> List[Item]:
    return [
        Item.objects.create(
            term=random.randbytes(6).hex(),
            definition=random.randbytes(6).hex(),
            learning_set_id=set_
        ) for _ in range(count)
    ]