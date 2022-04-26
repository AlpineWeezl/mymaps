import { Map, Marker } from 'pigeon-maps';
import 'react-tabs/style/react-tabs.css';

const MyTab = (props) => {
    const midCoord = (category) => {
        let latMin = null;
        let latMax = null;
        let longMin = null;
        let longMax = null;

        props.places.map((place) => {
            if (place.categoryId === category.categoryId) {
                if (latMin && latMax && longMin && longMax) {
                    place.lat < latMin ? latMin = place.lat : latMin = latMin;
                    place.lat > latMax ? latMax = place.lat : latMax = latMin;
                    place.long < longMin ? longMin = place.long : longMin = longMin;
                    place.long > longMax ? longMax = place.long : longMax = longMax;
                } else {
                    latMin = place.lat;
                    latMax = place.lat;
                    longMin = place.long;
                    longMax = place.long;
                }
            }
        });

        if (latMin && latMax && longMin && longMax) {
            return [
                (latMax - latMin) / 2 + latMin,
                (longMax - longMin) / 2 + longMin
            ]
        }
    }

    return (
        <Map key={`mapItem_${props.category.categoryId}`} height={640} defaultCenter={midCoord(props.category)} defaultZoom={11}>
            {
                props.places.map(
                    (place) => {
                        return (
                            (place.categoryId === props.category.categoryId) ? (
                                <Marker
                                    key={`marker_${place.placeId}`}
                                    width={50}
                                    anchor={[place.lat, place.long]}
                                />
                            ) : ('')
                        );
                    }
                )
            }
        </Map>
    )
}

export default MyTab;