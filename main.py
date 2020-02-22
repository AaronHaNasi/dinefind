import json
import requests
import geocoder
import re

def location():
    g = geocoder.ip('me')
    return "{}, {}".format(g.latlng[0], g.latlng[1])

def chain():
    f = open("chain.txt", "r")
    final = []
    for line in f:
        name = line.split("$")[0]
        name = name.split()
        name.pop(0)
        name = " ".join(name)
        name = name.lower()
        name = re.sub('\W+','', name)
        final.append(name)
    return final

def get_list(radius):
    URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    key = 'AIzaSyANqmnEgWqv-bZR0vXTQopHPPfiwWkkkqE'
    location = location()
    # location given here
    type = "restaurant"
    # defining a params dict for the parameters to be sent to the API
    PARAMS = {'location': location, 'radius': radius,'type': type, 'key': key}
    # sending get request and saving the response as response object
    r = requests.get(url = URL, params = PARAMS)
    # extracting data in json format
    return r.json()

list_of_chain = chain()
places = {}
i = 0
for rest in data["results"]:
    name = rest["name"]
    name = name.lower()
    name = re.sub('\W+','', name)
#    places.append(name)
    if name not in list_of_chain:
        places[i] = rest
        i += 1

print(places)
