from rest_framework import serializers
from backend.models import car_spec

class car_spec_serializer(serializers.ModelSerializer):
    class Meta:
        model = car_spec
        fields = '__all__'