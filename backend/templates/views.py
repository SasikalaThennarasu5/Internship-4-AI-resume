from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Template
from .serializers import TemplateSerializer
from rest_framework.generics import ListAPIView

class TemplateListView(APIView):
    def get(self, request):
        category = request.GET.get("category")

        if category and category != "All":
            templates = Template.objects.filter(category=category.lower())
        else:
            templates = Template.objects.all()

        serializer = TemplateSerializer(templates, many=True)
        return Response(serializer.data)
    
class TemplatePreviewView(ListAPIView):
    serializer_class = TemplateSerializer

    def get_queryset(self):
        return Template.objects.all()[:3]