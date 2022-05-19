import React from 'react'
import { useLocation } from 'react-router-dom'
import Reviews from './Reviews';
import Host from './Host'

const LocationDetails = () => {
    const location = useLocation();
    const { name, address: { street: neighborhood }, amenities, bathrooms: { $numberDecimal: baths }, bedrooms, beds, description, host, images: { picture_url: image }, minimum_nights, price: { $numberDecimal: price }, property_type, review_scores, room_type, summary, reviews, } = location.state

    const { review_scores_rating: rating, review_scores_value: value } = review_scores
    const bbb = { baths, bedrooms, beds }
    console.log(location.state)

    return (
        <div className='container'>
            <div className='row justify-content-start'>
                <div className='offset-lg-1 col-lg-10 '>
                    <h3 className=" fw-light ">{name}</h3>
                </div>
            </div>
            <div className="row">
                <div className='offset-lg-2 col-4 col-sm-2 '>
                    <p>rating:{rating}</p>
                </div>
                <div className='col-4 col-sm-2'>
                    <Reviews reviews={reviews} review_scores={review_scores} />
                </div>
                <div className='col-md-4'>
                    <p>{neighborhood}</p>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <img src={image} className="rounded img-fluid" alt="rental"></img>
                </div>
            </div>
            <Host host={host} type={property_type} bbb={bbb} description={description} />
        </div>
    );
};
export default LocationDetails