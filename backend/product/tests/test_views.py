from django.test import TestCase, Client
from django.urls import reverse
from product.models import *
import json

class TestViews(TestCase):
    def test_get_products(self):
        client  = Client()
        response = client.get(reverse('products'))
        self.assertEquals(response.status_code, 200)

    def test_get_routes(self):
        client  = Client()
        response = client.get(reverse('routes'))
        self.assertEquals(response.status_code, 200)

    def test_get_categories(self):
        client  = Client()
        response = client.get(reverse('categories'))
        self.assertEquals(response.status_code, 200)


