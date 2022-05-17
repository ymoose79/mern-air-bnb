import React from 'react'


// address.street, image, summary, price.$numberDecimal, images.thumbnail_url, review_scores.,review_scores_rating

const Card = ({ listing, key }) => {

    const { name, summary } = listing;
    const renderListing = listing.summary.length > 0;

    if (renderListing) {

        return (
            <div className='card m-2' style={{ width: '18rem' }} >
                <div className='card-body'>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{summary}</p>
                    <button className="btn btn-primary" >Check it Out! </button>
                </div>
            </div>
        )
    }
}

export default Card