
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import TrophosViewSet
router = DefaultRouter()
router.register('trophos', TrophosViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
