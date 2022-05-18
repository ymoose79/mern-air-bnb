import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
const { REACT_APP_URL } = process.env


const AwesomeIcons = ({ faIcon }) => {

    const iconInfo = [{ title: "New York", icon: solid('pizza-slice'), city: "New York" }, { title: "Portugal", icon: solid("futbol"), city: "Porto" }, { title: "Canada", icon: solid("hockey-puck"), city: "Montreal" }, { title: "Hawaii", icon: solid("umbrella-beach"), city: ["Maui", "The Big Island", "Kauai"] }, { title: "Spain", icon: solid("guitar"), city: "Barcelona" }, { title: "Turkey", icon: solid("moon"), city: "Istanbul" }, { title: "China", icon: solid("dragon"), city: "Hong Kong" }, { title: "Austrailia", icon: solid("beer-mug-empty"), city: "Sydney" }]

    async function citySearch(e, city) {
        e.preventDefault();
        const response = await fetch(`${REACT_APP_URL}location?city=${city}`)
        const res = await response.json();
        console.log(res[1])
    }

    return (
        <>
            <h1 className="display-3 text-center mt-5">Bed and Breakfast</h1>
            <div className='d-flex flex-wrap justify-content-evenly m-3'>
                {iconInfo.map((faIcon, i) => {
                    return (
                        <div className='px-3' >
                            < a href="/" title={faIcon.title} onClick={(e) => citySearch(e, faIcon.city)}>
                                <FontAwesomeIcon icon={faIcon.icon} />
                            </a>
                        </div>)
                })}
            </div>
        </>
    )
}

export default AwesomeIcons