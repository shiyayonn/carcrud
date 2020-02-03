from rest_framework import viewsets

from .serializers import car_spec_serializer
from backend.models import car_spec


class car_spec_view_set(viewsets.ModelViewSet):
    queryset = car_spec.objects.all()
    serializer_class = car_spec_serializer