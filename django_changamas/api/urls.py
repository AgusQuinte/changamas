from django.urls import path
from .views import saludo, crear_persona

urlpatterns = [
    path("saludo/", saludo),
    path("persona/", crear_persona),
]