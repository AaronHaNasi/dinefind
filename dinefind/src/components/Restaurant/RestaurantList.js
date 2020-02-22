import React from "react";

import {Restaurant} from "./Restaurant";

export default function RestaurantList(list) {
    return(
        <ul>
            {list.map(item => (
                    <Restaurant name={item.name}
                                rating={item.rating}
                                distance={item.distance}
                                longitude={item.longitude}
                                latitude={item.latitude} > </Restaurant>


                )
            )}
        </ul>
    )
}
