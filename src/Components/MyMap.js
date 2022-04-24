import { Map, Marker } from 'pigeon-maps'
import React from 'react'

const MyMap = (props) => {
    return (
        <Marker key={`marker_${props.placeId}`} width={50} anchor={[props.lat, props.long]} />
    )
}

export default MyMap