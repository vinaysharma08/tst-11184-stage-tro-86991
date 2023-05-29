from rest_framework import authentication
from tuntun.models import Trophos
from .serializers import TrophosSerializer
from rest_framework import viewsets

class TrophosViewSet(viewsets.ModelViewSet):
    serializer_class = TrophosSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Trophos.objects.all()