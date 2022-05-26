import React from 'react'
import { useNavigate } from 'react-router-dom'


/**
 * goto city/room
 * pass in listing data
 */


// address.street, image, summary, price.$numberDecimal, images.thumbnail_url, review_scores.,review_scores_rating

const Card = ({ listing }) => {

    const navigate = useNavigate()

    const { summary, images, name } = listing;
    const renderListing = listing.summary.length > 0;

    const handleRouter = (listing) => {
        navigate(`${listing._id}`, { state: { ...listing } });
    }


    if (renderListing) {

        return (
            <div className='card m-2' style={{ width: '18rem' }} >
                <img src={images.picture_url} className="card-img-top" alt="..." />
                <div className='card-body'>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{summary}</p>
                    <button className="btn btn-primary" onClick={() => handleRouter(listing)} >Check it Out! </button>
                </div>
            </div>
        )
    }
}

export default Card