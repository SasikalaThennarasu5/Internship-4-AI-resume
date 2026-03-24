from rest_framework import serializers
from .models import Feature

class FeatureSerializer(serializers.ModelSerializer):
    icon = serializers.SerializerMethodField()

    class Meta:
        model = Feature
        fields = "__all__"

    def get_icon(self, obj):
        request = self.context.get('request')
        if obj.icon:
            return request.build_absolute_uri(obj.icon.url)
        return None