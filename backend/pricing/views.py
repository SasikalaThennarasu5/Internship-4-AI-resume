from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Plan
from .serializers import PlanSerializer

class PlanListView(APIView):
    def get(self, request):
        plan_type = request.GET.get("type")  # monthly / yearly

        if plan_type:
            plans = Plan.objects.filter(plan_type=plan_type)
        else:
            plans = Plan.objects.all()

        serializer = PlanSerializer(plans, many=True)
        return Response(serializer.data)