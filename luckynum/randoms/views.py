from django.shortcuts import render


def randoms(request):
    return render(request, 'randoms/randoms.html')