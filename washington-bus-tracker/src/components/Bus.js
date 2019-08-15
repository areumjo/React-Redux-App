import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const busOptions = [
    { key: '101', id: '101', icon: 'bus', text: 'Bus 101' },
    { key: '2', id: '2', icon: 'bus', text: 'Bus 2' },
    { key: '3', id: '3', icon: 'bus', text: 'Bus 3' },
    { key: '10', id: '10', icon: 'bus', text: 'Bus 10' },
    { key: '25', id: '25', icon: 'bus', text: 'Bus 25' },
    { key: '50', id: '50', icon: 'bus', text: 'Bus 50' },
    { key: '60', id: '60', icon: 'bus', text: 'Bus 60' },
    { key: '70', id: '70', icon: 'bus', text: 'Bus 70' },
    { key: '80', id: '80', icon: 'bus', text: 'Bus 80' },
    { key: '90', id: '90', icon: 'bus', text: 'Bus 90' },
  ]
  

const Bus = props => {
    return (
        <>
            <Dropdown
                onChange={props.handleClick}
                placeholder='Select Bus'
                search
                selection
                options={busOptions}
            />
        </>
    )
}

export default Bus;