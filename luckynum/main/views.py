from django.shortcuts import render


def index(request):
    return render(request, 'main/index.html')

def personal(request):
    return render(request, 'main/personal.html')