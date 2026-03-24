from rest_framework.generics import ListAPIView
from .models import Testimonial
from .serializers import TestimonialSerializer

class TestimonialListView(ListAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

    def get_serializer_context(self):
        return {'request': self.request}
    