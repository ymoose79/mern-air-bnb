import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const AwesomeIcons = () => {
    return (
        <div className="d-flex justify-content-evenly">
            <div>
                <FontAwesomeIcon icon={solid("pizza-slice")} />
                <p>NY</p>
            </div>
            <div>
                <FontAwesomeIcon icon={solid("futbol")} />
                <p>portugal</p>
            </div>
            <div>
                <FontAwesomeIcon icon={solid("hockey-puck")} />
                <p>canada</p>
            </div>
            <div>
                <FontAwesomeIcon icon={solid("umbrella-beach")} />
                <p>hawaii</p>
            </div>
            <div>
                <FontAwesomeIcon icon={solid("guitar")} />
                <p>spain</p>
            </div>
            <div>
                <FontAwesomeIcon icon={solid("moon")} />
                <p>turkey</p>
            </div>
            <div>
                <FontAwesomeIcon icon={solid("dragon")} />
                <p>china</p>
            </div>
            <div>
                <FontAwesomeIcon icon={solid("beer-mug-empty")} />
                <p>Austraila</p>
            </div>
        </div>
    )
}

//   Sydney, Maui, the Big Island, Kauai, 
// NY, Rio, Portugal, Barcelona, Hawaii, Canada, Turkey, China, Austraila

export default AwesomeIcons