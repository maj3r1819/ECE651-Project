from .serializers import ProductSerializer, CategorySerializer, UserSerializer, UserSerializerWithToken
from .models import Product, Category
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
from selenium import webdriver
from bs4 import BeautifulSoup
import time

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = ['sagar/potnis']
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    # print('query' + query)
    if query == None:
        query = ''

    products = Product.objects.filter(product_name__icontains=query)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data )




@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(pk = pk)
    serializer = ProductSerializer(product, many= False)
    return Response(serializer.data)


@api_view(['GET'])
def getCategories(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getCategory(request, pk):
    category = Product.objects.filter(category_id = pk)
    serializer = ProductSerializer(category, many = True)
    return Response(serializer.data)




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many = False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data )


@api_view(['POST'])
def registerUser(request):
    try:
        data =request.data
        user = User.objects.create(
            first_name = data['name'], # data['name'] will come from the frontend
            username = data['email'],
            email = data['email'],
            password = make_password(data['password']) #it will hash the password
        )
        serializer = UserSerializerWithToken(user , many= False)
        return Response(serializer.data)
    except: #EXCEPT BLock when new user registers with same credentials
        message = {'detail' : 'User with this email already exists. Try another one'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
# class ProductView(viewsets.ModelViewSet):
#     options = webdriver.ChromeOptions()
#     options.add_argument("--enable-javascript")
#     driver = webdriver.Chrome('chromedriver', options=options)
#     URL = 'https://www.zehrs.ca/search?search-bar=banana'
#     driver.get(URL)
#     time.sleep(5)
#     html = driver.page_source
#     soup = BeautifulSoup(html, 'lxml')
#     soup = soup.find('span' , class_ = 'price__value selling-price-list__item__price selling-price-list__item__price--now-price__value')
#     price = soup.text
#     price = str(price)
#     price = price[1:]
#     price = float(price)
#     print(price)
#     Product.objects.filter(pk = 2).update(product_price = price)
#     # reg.save()
#     serializer_class = ProductSerializer
#     queryset = Product.objects.all()