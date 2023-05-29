from rest_framework import authentication
from teplez.models import Druple
from .serializers import DrupleSerializer
from rest_framework import viewsets

class DrupleViewSet(viewsets.ModelViewSet):
    serializer_class = DrupleSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Druple.objects.all()