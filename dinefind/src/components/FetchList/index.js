import React from "react";

export default function FetchList(distance, open, chains, visited, rating) {
return fetch('https://dinefind-269008.appspot.com/data',
    {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body:{
            'radius':{distance},
            'fil':{
                "open":{open},
                "chain":{chains},
                "prev":{visited},
                "rating":{rating}
            }

        }
    });
}
