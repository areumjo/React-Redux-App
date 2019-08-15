import React from 'react';
import { connect } from 'react-redux';

import { getData } from "../actions";

const BusPosition = props => {
    return(
        <div>
            <p>Where is my bus?</p>
            <p>Bus number: 70</p>
            <button onClick={props.getData} className="bus-btn">{props.isLoading? <p>loading...</p> : "show me bus location"}</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        busPosition: state.busPosition,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { getData })(BusPosition);