from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from google.oauth2 import id_token
from google.auth.transport import requests
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

GOOGLE_CLIENT_ID = "296028710262-iibhi4oinms7786m0c93a3qse5351mi3.apps.googleusercontent.com"

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class GoogleLoginView(APIView):
    def post(self, request):
        token = request.data.get("token")

        try:
            idinfo = id_token.verify_oauth2_token(
                token, requests.Request(), GOOGLE_CLIENT_ID
            )

            email = idinfo.get("email")
            name = idinfo.get("name")

            user, created = User.objects.get_or_create(
                username=email,
                defaults={"email": email}
            )

            refresh = RefreshToken.for_user(user)

            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh)
            })

        except Exception as e:
            return Response({"error": "Invalid token"}, status=400)