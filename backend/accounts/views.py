from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from google.oauth2 import id_token
from google.auth.transport import requests
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view

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
        
@api_view(['POST'])
def email_login(request):
    email = request.data.get("email")
    password = request.data.get("password")

    try:
        user_obj = User.objects.get(email=email)

        user = authenticate(
            username=user_obj.username,
            password=password
        )

        if user is not None:
            refresh = RefreshToken.for_user(user)

            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh)
            })
        else:
            return Response({"error": "Invalid password"}, status=400)

    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)