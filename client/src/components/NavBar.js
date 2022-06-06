import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
import ReactModal from './ReactModal';
// import ReactTooltip from 'react-tooltip';


const Navbar = () => {
    const iconInfo = [{ title: "New York", icon: solid('pizza-slice'), city: "New York", href: "/location/newyork" }, { title: "Portugal", icon: solid("futbol"), city: "Porto" }, { title: "Canada", icon: solid("hockey-puck"), city: "Montreal" }, { title: "Maui", icon: solid("umbrella-beach"), city: "Maui" }, { title: "The Big Island", icon: solid("volcano"), city: "The Big Island" }, { title: "Kauai, HI", city: "Kauai", icon: solid("volleyball") }, { title: "Spain", icon: solid("guitar"), city: "Barcelona" }, { title: "Turkey", icon: solid("moon"), city: "Istanbul" }, { title: "China", icon: solid("dragon"), city: "Hong Kong" }, { title: "Austrailia", icon: solid("beer-mug-empty"), city: "Sydney" }, { title: "Brazil", icon: solid("frog"), city: "Rio De Janeiro" }]


    const [open, setOpen] = useState(false);

    const openModalState = () => {
        setOpen(!open);
    };


    return (
        <>
            {/* TODO Become a Host component */}
            {/* TODO Sign-up/in component */}
            <div className='navbar'>
                <div className='container p-2 bg-secondary bg-opacity-25 ps-3 mt-2 mt-md-5 rounded'>
                    <a href="/" className='link-dark text-decoration-none'><h1 className="display-3 text-start">airbnb Spoof</h1></a>
                    <button className='btn btn-link text-decoration-none' onClick={openModalState} > sign up</button>
                    <h5>rent your space</h5>
                </div>
            </div>
            <ReactModal open={open} closeButton={true} openModalState={() => openModalState} />
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