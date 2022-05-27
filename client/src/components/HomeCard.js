import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomeCard = ({ listing }) => {

    const navigate = useNavigate()
    const handleRouter = (listing) => {
        navigate(`${location}`, { state: { ...listing } });
    }

    const { address: { market: location }, bathrooms: { $numberDecimal: baths }, bedrooms, beds, price: { $numberDecimal: price }, images, address: { street: neighborhood } } = listing

    if (price > 200) {
        return (
            <div className='card m-2' style={{ width: '18rem' }} >
                <img src={images.picture_url} className="card-img-top" alt="..." />
                <div className='card-body'>
                    <h5 className="card-title">{neighborhood}</h5>
                    <h6 className='align-items-start text-secondary'>{bedrooms}_bedrooms | {beds}_beds | {baths}_baths</h6>
                    <h6 className="align-items-start text-secondary"> price: <span className='text-dark'> {price} </span></h6>
                    <button type="button" className="btn btn-outline-info align-self-end" onClick={() => handleRouter(listing)} >See more {location} </button>
                </div>
            </div>
        )
    }
}

export default HomeCard