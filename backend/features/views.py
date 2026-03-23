from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Feature
from .serializer import FeatureSerializer

class FeatureListView(APIView):
    def get(self, request):
        features = Feature.objects.all()
        serializer = FeatureSerializer(features, many=True)
        return Response(serializer.data)