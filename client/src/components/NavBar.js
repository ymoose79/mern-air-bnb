import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';


const Navbar = () => {

    const iconInfo = [{ title: "New York", icon: solid('pizza-slice'), city: "New York", href: "/location/newyork" }, { title: "Portugal", icon: solid("futbol"), city: "Porto" }, { title: "Canada", icon: solid("hockey-puck"), city: "Montreal" }, { title: "Maui", icon: solid("umbrella-beach"), city: "Maui" }, { title: "The Big Island", icon: solid("volcano"), city: "The Big Island" }, { title: "Kauai, HI", city: "Kauai", icon: solid("volleyball") }, { title: "Spain", icon: solid("guitar"), city: "Barcelona" }, { title: "Turkey", icon: solid("moon"), city: "Istanbul" }, { title: "China", icon: solid("dragon"), city: "Hong Kong" }, { title: "Austrailia", icon: solid("beer-mug-empty"), city: "Sydney" }, { title: "Brazil", icon: solid("frog"), city: "Rio De Janeiro" }]

    return (
        <>
            {/* TODO Become a Host component */}
            {/* TODO Sign-up/in component */}
            <div className='container p-2 bg-secondary bg-opacity-25 ps-3 mt-2 mt-md-5 rounded'>
                <div className='row'>
                    <div className='col-auto'>
                        <a href="/" className='link-dark text-decoration-none'><h1 className="display-3 text-start">airbnb Spoof</h1></a>
                    </div>
                    <div className='col-auto ms-auto my-auto px-lg-5'>
                        <button type="button" className="btn btn-outline-info" data-tip="Coming soon: Login/Create/Delete/Update Room for let" data-event="click"><FontAwesomeIcon icon={solid("bars")} /></button>
                    </div>
                    <ReactTooltip effect="solid" place="bottom" />
                </div>
            </div>
            <hr />
            <div className='d-flex flex-wrap justify-content-evenly m-md-3'>
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

export default Navbar