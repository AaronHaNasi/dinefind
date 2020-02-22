import json
import requests
import geocoder
import re
import populartimes
from operator import itemgetter, attrgetter

key = 'AIzaSyANqmnEgWqv-bZR0vXTQopHPPfiwWkkkqE'

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

def get_list(radius, location):
    URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    # location given here
    type = "restaurant"
    # defining a params dict for the parameters to be sent to the API
    PARAMS = {'location': location, 'radius': radius,'type': type, 'key': key}
    r = requests.get(url = URL, params = PARAMS)
    return r.json()

# fil = {open: 0, chain: 0, prev: 0, rating: 0}
def filter(data, fil):
    final = []
    if fil["open"] == 1:
        for index, place in enumerate(data["results"]):
            if place["opening_hours"]["open_now"] == True:
                if place not in final:
                    final.append(place)
    if fil["chain"] == 1:
        list_of_chain = chain()
        for index, place in enumerate(data["results"]):
            name = place["name"]
            name = name.lower()
            name = re.sub('\W+','', name)
            if name not in list_of_chain:
                if place not in final:
                    final.append(place)
    if fil["prev"] == 1:
        pass
    if fil["rating"] > 0:
        for index, place in enumerate(data["results"]):
            rating = place["rating"]
            if fil["rating"] <= rating:
                if place not in final:
                    final.append(place)
    flag = 0
    for key, val in fil.items():
        if val >= 1:
            flag = 1
            break

    if final == [] and flag == 0:
        final = data["results"]

    return final

# sor = {current_crowd: 0, price: 0, rating: 0}
# 0 does not sort, 1 is low to high, 2 is high to low 
#[(a,b), (c,d)

def data_sort(data, sor):
    if 

def time(id):
    pop = populartimes.get_id(key, id)
    current = pop["current_popularity"]
    #popular_time = pop["populartimes"]
    return current
# current_crowd
#
#
# data = get_list(15000, location())
# name = filter_by_chain(data)[0]["name"]
# id = filter_by_chain(data)[0]["place_id"]
# cur = time(id)
# print("Name: {}, Current: {}".format(name, cur))
data = get_list(150000, location())
fil = {"open": 0, "chain": 1, "prev": 0, "rating": 0}
final_data = filter(data, fil)
print('\n----------------\n')
print(data["results"])
print('\n----------------\n')
print(final_data)
print('\n----------------\n')
