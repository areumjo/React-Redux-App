import React from 'react';
import { connect } from 'react-redux';

const BusPosition = props => {
    return(
        <div>
            <p>Where is my bus?</p>
            {props.busPosition}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        busPosition: state.busPosition,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {})(BusPosition);