from rest_framework import routers

from .views import car_spec_view_set

router = routers.DefaultRouter()
router.register('cars', car_spec_view_set , 'cars')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls