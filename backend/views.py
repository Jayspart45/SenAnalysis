from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


@csrf_exempt
def fetchText(request):
    if request.method == "POST":
        audioData = request.FILES.get("audioFile")
        print(audioData)
        if audioData:
            with open(f"audio/{audioData}.mp3", 'wb') as destination:
                for chunk in audioData.chunks():
                    destination.write(chunk)
    print("Function fectchText Called!")
    return JsonResponse({"success": True, "message": "Successful"})
