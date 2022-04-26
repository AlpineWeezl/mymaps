import { Marker } from 'pigeon-maps'
import React from 'react'

const MyMap = (props) => {
    console.log(props.lat);
    console.log(props.long);

    return (
        <Marker
            key={`marker_${props.placeId}`}
            width={50}
            anchor={[props.lat, props.long]}
        />
    )
}

export default MyMap