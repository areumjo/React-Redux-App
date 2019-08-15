import React from 'react';

const Bus = props => {
    return (
        <>
        <p>Vehicle ID: {props.busId}</p>
            <div>
                <p>Latitude: {props.busLat}</p>
                <p>Longtitude: {props.busLon}</p><hr />
            </div>
        </>
    )
}

export default Bus;