from django.shortcuts import render

# Create your views here.
from django.views.generic.detail import DetailView

from backend.models import car_spec


def index(request):
    return render(request, 'frontend/index.html')


class cardetailview(DetailView):
    model = car_spec
    template_name = 'frontend/index.html'