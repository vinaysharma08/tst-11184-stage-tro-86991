from rest_framework import serializers
from teplez.models import Druple

class DrupleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Druple
        fields = "__all__"