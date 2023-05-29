
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DrupleViewSet
router = DefaultRouter()
router.register('druple', DrupleViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
