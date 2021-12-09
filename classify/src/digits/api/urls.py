from .views import DigitViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('digits', DigitViewSet)
urlpatterns = router.urls
