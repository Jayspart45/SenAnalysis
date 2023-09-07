from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from . import whisper_service  # Import the module


@csrf_exempt
def fetchText(request):

    if request.method == 'POST' and request.FILES.get('audioFile'):
        try:
            audio_file = request.FILES['audio_file']

            whisper_out = whisper_service.transcribe_audio(audio_file)

            return JsonResponse({"whisper_out": whisper_out})

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request method or missing audio file"}, status=400)
