import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const AwesomeIcons = () => {
    return (
        <div className='d-flex flex-wrap justify-content-evenly'>
            <div className='px-3'>
                <a href="/">
                    <FontAwesomeIcon icon={solid("pizza-slice")} /> </a>
                <p>NY</p>
            </div>
            <div className='px-3'>
                <a href="/">
                    <FontAwesomeIcon icon={solid("futbol")} /></a>
                <p>portugal</p>
            </div>
            <div className='px-3'>
                <a href="/">
                    <FontAwesomeIcon icon={solid("hockey-puck")} /></a>
                <p>canada</p>
            </div>
            <div className='px-3'>
                <a href="/">
                    <FontAwesomeIcon icon={solid("umbrella-beach")} /></a>
                <p>hawaii</p>
            </div>
            <div className='px-3'>
                <a href="/">
                    <FontAwesomeIcon icon={solid("guitar")} /></a>
                <p>spain</p>
            </div>
            <div className='px-3'>
                <a href="/">
                    <FontAwesomeIcon icon={solid("moon")} /></a>
                <p>turkey</p>
            </div>
            <div className='px-3'>
                <a href="/">
                    <FontAwesomeIcon icon={solid("dragon")} /></a>
                <p>china</p>
            </div>
            <div className='px-3'>
                <a href="/">
                    <FontAwesomeIcon icon={solid("beer-mug-empty")} /></a>
                <p>Austraila</p>
            </div>
        </div>
    )
}

//   Sydney, Maui, the Big Island, Kauai, 
// NY, Rio, Portugal, Barcelona, Hawaii, Canada, Turkey, China, Austraila

export default AwesomeIcons