import React from 'react';
import { connect } from 'react-redux';

import { getData, getBusNumber } from "../actions";

import Bus from "./Bus";

const BusPosition = props => {
    // console.log('BusPosition as props: ', props.busPosition)

    const handleClick = e => {
        props.getBusNumber(e.target.id)
    }
    
    return(
        <div>
            <p>Where is my bus?</p>
            <div>
                <p>Bus number: {props.busNumber}</p>
                <button id="80" onClick={(e)=>handleClick(e)}>80</button>
                <button id="90" onClick={(e)=>handleClick(e)}>90</button>
            </div>
            <div>
                <button onClick={()=>props.getData(props.busNumber)} className="bus-btn">{props.isLoading? <p>loading...</p> : "show me bus location"}</button>
            </div>
            {props.busPosition && props.busPosition.map(bus => <Bus key={bus.VehicleID} busId={bus.VehicleID} busLat={bus.Lat} busLon={bus.Lon}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        busPosition: state.metroReducer.busPosition,
        isLoading: state.metroReducer.isLoading,
        busNumber: state.busReducer.busNumber
    }
}

export default connect(mapStateToProps, { getData, getBusNumber })(BusPosition);