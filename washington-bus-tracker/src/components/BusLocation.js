import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const BusLocation = props => {
    const center = {
        lat: props.busLat,
        lng: props.busLon
    }
    const zoom = 11
    return (
        <>
        <p>Vehicle ID: {props.busId}</p>
            <div>
            {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA5NlL_XrTeWNKFqpONxnkNT5CQA7eeKTQ" }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <AnyReactComponent
                    lat={center.lat}
                    lng={center.lng}
                    text="Bus"
                /> */}
                <p>Latitude: {props.busLat}</p>
                <p>Longtitude: {props.busLon}</p>
            {/* </GoogleMapReact> */}
            </div>
        </>
    )
}

export default BusLocation;