from django.urls import path
from . import views
from django.views.generic import TemplateView


urlpatterns = [
    path("fetchText/", views.fetchText, name="fetchText"),
    path("", TemplateView.as_view(template_name="base.html")),
]
