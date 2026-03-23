from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('resume.urls')),
    path('api/auth/', include('accounts.urls')),
    path('api/pricing/', include('pricing.urls')),
    path('api/templates/', include('templates.urls')),
    path('api/testimonials/', include('testimonials.urls')),
    path("api/steps/", include("howitworks.urls")),
    path("api/features/", include("features.urls")),
]

# ✅ ADD THIS
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)