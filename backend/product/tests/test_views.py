from django.test import TestCase, Client
from django.urls import reverse
from product.models import *
import json

class TestViews(TestCase):
    def test_get_products(self):
        client  = Client()
        response = client.get(reverse('products'))
        self.assertEquals(response.status_code, 200)

    def test_get_product(self):
        client = Client()
        Product.objects.create(pk = 1, product_name = 'mango')
        response = client.get(reverse('product', args = ['1']))
        self.assertEquals(response.status_code, 200)

    def test_get_routes(self):
        client  = Client()
        response = client.get(reverse('routes'))
        self.assertEquals(response.status_code, 200)

    def test_get_categories(self):
        client  = Client()
        response = client.get(reverse('categories'))
        self.assertEquals(response.status_code, 200)

    def test_get_category(self):
        client = Client()
        response = client.get(reverse('cateogry', args = ['1']))
        self.assertEquals(response.status_code, 200)

    # def test_get_userprofile(self):
    #     user = User.objects.create(
    #         first_name = 'Sagar',
    #         username = 'saggz',
    #         email = 'major1819@fakemail.com',
    #         password = 'fakepassword'
    #
    #
    #     )
    #     client = Client()
    #     response = client.get(reverse('users-profile'), user = user)
    #     self.assertEquals(response.status_code, 302)

    # def test_post_addproduct(self):
    #     client = Client()
    #     response = client.post(reverse('add-product'), data = {
    #                                                          'product_name' : 'Apple',
    #                                                         # 'price_walmart' : 2,
    #                                                            # 'price_sobeys': 3,
    #                                                            # 'price_zehrs' : 2,
    #                                                            # 'walmart_url' : 'www.walmart.ca',
    #                                                            # 'sobeys_url' : 'www.sobeys.ca',
    #                                                            # 'zehrs_url': 'www.zehrs.ca',
    #                                                            # 'description' : 'zehr good'
    #                                                          })
    #
    #     self.assertEquals(response.status_code, 200)



    # def test_deleteproduct(self):
    #     client = Client()
    #     response = client.delete(reverse('delete-product', args=['1']))
    #     self.assertEquals(response.status_code, 200)
