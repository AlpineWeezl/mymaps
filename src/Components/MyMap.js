import { Map, Marker } from 'pigeon-maps'
import React from 'react'

const MyMap = (props) => {
    return (
        <Map height={900} defaultCenter={[47.584102, 10.5410919]} defaultZoom={11}>
            {props.places.map((place) => {
                return (
                    <Marker width={50} anchor={[place.lat, place.long]} />
                )
            })
            }

        </Map>
    )
}

export default MyMap