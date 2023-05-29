from rest_framework import serializers
from tuntun.models import Trophos

class TrophosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trophos
        fields = "__all__"