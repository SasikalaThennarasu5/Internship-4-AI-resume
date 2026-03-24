from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Step
from .serializer import StepSerializer

class StepListView(APIView):
    def get(self, request):
        steps = Step.objects.all()
        serializer = StepSerializer(
            steps,
            many=True,
            context={'request': request}   # 🔥 MUST
        )
        return Response(serializer.data)