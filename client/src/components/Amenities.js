import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Amenities = ({ amenities }) => {
    console.log(amenities)
    return (

        <div className='container-fluid bg-white'>
            {amenities.map((amen, i) => {
                return <li key={i}>{amen}</li>
            })}
        </div>
    )
}

export default Amenities