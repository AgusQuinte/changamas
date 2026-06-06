from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Persona


def saludo(request):
    return JsonResponse({"mensaje": "API funcionando 🚀"})


@csrf_exempt
def crear_persona(request):
    if request.method == "POST":
        data = json.loads(request.body)

        persona = Persona.objects.create(
            nombre=data["nombre"],
            email=data["email"]
        )

        return JsonResponse({
            "mensaje": "Guardado en PostgreSQL",
            "id": persona.id
        })