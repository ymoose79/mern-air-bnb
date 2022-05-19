import React from 'react'
import { useLocation } from 'react-router-dom'

const LocationDetails = () => {
    const location = useLocation();
    return (
        <>
            <div>{location.state.name}</div>
        </>
    );
};
export default LocationDetails