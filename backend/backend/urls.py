import sys
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('product.urls')),
    path("", TemplateView.as_view(template_name = 'index.html'))
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) # for the images
urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT) # for the images
