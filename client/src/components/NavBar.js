import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faPizzaSlice,
    faFutbol,
    faHockeyPuck,
    faUmbrellaBeach,
    faVolcano,
    faVolleyball,
    faGuitar,
    faMoon,
    faDragon,
    faBeerMugEmpty,
    faFrog
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';


const Navbar = () => {

    const iconInfo = [
        { title: "New York", icon: faPizzaSlice, city: "New York", href: "/location/newyork" },
        { title: "Portugal", icon: faFutbol, city: "Porto" },
        { title: "Canada", icon: faHockeyPuck, city: "Montreal" },
        { title: "Maui", icon: faUmbrellaBeach, city: "Maui" },
        { title: "The Big Island", icon: faVolcano, city: "The Big Island" },
        { title: "Kauai, HI", city: "Kauai", icon: faVolleyball },
        { title: "Spain", icon: faGuitar, city: "Barcelona" },
        { title: "Turkey", icon: faMoon, city: "Istanbul" },
        { title: "China", icon: faDragon, city: "Hong Kong" },
        { title: "Australia", icon: faBeerMugEmpty, city: "Sydney" },
        { title: "Brazil", icon: faFrog, city: "Rio De Janeiro" }
    ]

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
                        <button type="button" className="btn btn-outline-info" data-tip="Coming soon: Login/Create/Delete/Update Room for let" data-event="click"><FontAwesomeIcon icon={faBars} /></button>
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