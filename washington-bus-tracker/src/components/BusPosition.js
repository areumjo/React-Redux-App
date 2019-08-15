import React from 'react';
import { connect } from 'react-redux';

import { getData } from "../actions";

import Bus from "./Bus";

const BusPosition = props => {
    // console.log('BusPosition as props: ', props.busPosition)
    
    return(
        <div>
            <p>Where is my bus?</p>
            <p>Bus number: {props.busNumber}</p>
            <button onClick={props.getData} className="bus-btn">{props.isLoading? <p>loading...</p> : "show me bus location"}</button>
            {props.busPosition && props.busPosition.map(bus => <Bus key={bus.VehicleID} busId={bus.VehicleID} busLat={bus.Lat} busLon={bus.Lon}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        busPosition: state.busPosition,
        isLoading: state.isLoading,
        busNumber: state.busNumber
    }
}

export default connect(mapStateToProps, { getData })(BusPosition);