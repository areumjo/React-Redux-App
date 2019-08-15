import React from 'react';
import { connect } from 'react-redux';

import { getData, getBusNumber } from "../actions";

import Bus from "./Bus";
import BusLocation from "./BusLocation";
import Map from './Map.js';

const BusPosition = props => {
    // console.log('BusPosition as props: ', props.busPosition)

    const handleClick = e => {
        props.getBusNumber(e.target.id)
    }
    
    return(
        <div className="inner-container">
            <h2>Where is my bus?</h2>
            <div className="buss">
                <p>Bus number: {props.busNumber}</p>
                <button id="70" onClick={(e)=>handleClick(e)}>70</button>
                <button id="80" onClick={(e)=>handleClick(e)}>80</button>
                <button id="90" onClick={(e)=>handleClick(e)}>90</button><br />
                <Bus busNumber={props.busNumber} handleClick={handleClick}/>
            </div>
            <div className="show-me-container">
                <button onClick={()=>props.getData(props.busNumber)} className="bus-btn">{props.isLoading? <p>loading...</p> : "show me bus location"}</button>
            </div>
            {props.busPosition.length > 1 && <Map lat={props.busPosition[0].Lat} lon={props.busPosition[0].Lon} />}

            {props.busPosition.length > 1 && props.busPosition.map(bus => <BusLocation key={bus.VehicleID} busId={bus.VehicleID} busLat={bus.Lat} busLon={bus.Lon}/>)}
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