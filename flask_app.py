from flask import Flask, flash, redirect, render_template, request, session, abort, url_for, make_response
import os
import json
import requests
import geocoder
import re
import populartimes
from operator import itemgetter, attrgetter
import pyrebase

key = 'AIzaSyANqmnEgWqv-bZR0vXTQopHPPfiwWkkkqE'
firebase_config = {
    "apikey" : 'AIzaSyAqEFmVsDH5PmYM2MGng6bLUJh5CHsS9pU',
    "authDomain" : "dinefind-e3e7c.firebaseapp.com",
    "databaseURL" : "https://dinefind-e3e7c.firebaseio.com",
    "storageBucket" : "dinefind-e3e7c.appspot.com"
}

firebase = pyrebase.initialize_app(config)  #Firebase object
db = firebase.database()                    #Firebase database object
auth = firebase.auth()                      #Firebase authentication object
storage = firebase.storage()                #Firebase storage object
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == '__main__':
    # This is used when running locally. Gunicorn is used to run the
    # application on Google App Engine. See entrypoint in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
