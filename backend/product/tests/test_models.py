from django.test import TestCase
from product.models import *

class testModels(TestCase):

    def test_product_name(self):
        product_name = Product.objects.create(product_name="Apple")
        self.assertEquals(str(product_name), "Apple")

    def test_category_name(self):
        category_name = Category.objects.create(category_name="Fruits")
        self.assertEquals(str(category_name), "Fruits")

    def test_cart_item(self):
        name = CartItem.objects.create(name="my_user")
        self.assertEquals(str(name), "my_user")