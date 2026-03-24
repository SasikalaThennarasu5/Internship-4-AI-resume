from rest_framework import serializers
from .models import Step

class StepSerializer(serializers.ModelSerializer):
    icon = serializers.SerializerMethodField()

    class Meta:
        model = Step
        fields = "__all__"

    def get_icon(self, obj):
        request = self.context.get('request')
        if obj.icon:
            return request.build_absolute_uri(obj.icon.url)
        return None