import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'


const AwesomeIcons = () => {

    const iconInfo = [{ title: "New York", icon: solid('pizza-slice'), city: "New York", href: "/location/newyork" }, { title: "Portugal", icon: solid("futbol"), city: "Porto" }, { title: "Canada", icon: solid("hockey-puck"), city: "Montreal" }, { title: "Hawaii", icon: solid("umbrella-beach"), city: ["Maui", "The Big Island", "Kauai"] }, { title: "Spain", icon: solid("guitar"), city: "Barcelona" }, { title: "Turkey", icon: solid("moon"), city: "Istanbul" }, { title: "China", icon: solid("dragon"), city: "Hong Kong" }, { title: "Austrailia", icon: solid("beer-mug-empty"), city: "Sydney" }]

    return (
        <>
            <h1 className="display-3 text-center bg-secondary bg-opacity-25 mt-5">Bed and Breakfast</h1>
            <hr />
            <div className='d-flex flex-wrap justify-content-evenly m-3'>
                {iconInfo.map((faIcon, i) => {
                    return (
                        <div key={i}>
                            <div className='container justify-content-center text-center'>
                                < Link to={faIcon.city} title={faIcon.title} >
                                    <FontAwesomeIcon icon={faIcon.icon} />
                                </Link>
                                <p>{faIcon.title}</p>
                            </div>
                        </div>)
                })}
            </div>
        </>
    )
}

export default AwesomeIcons