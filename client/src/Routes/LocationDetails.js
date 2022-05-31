import React from 'react'
import { useLocation } from 'react-router-dom'
import Reviews from '../components/Reviews';
import Host from '../components/Host'
import Amenities from '../components/Amenities';
import PayCard from '../components/PayCard';


// TODO amenities  modul
// TODO add superhost
// TODO Things to know component
// TODO review component (?)
// TODO about host / map (?) component


const LocationDetails = () => {
    const location = useLocation();
    const { name, address: { street: neighborhood }, amenities, bathrooms: { $numberDecimal: baths }, bedrooms, beds, description, host, images: { picture_url: image }, price: { $numberDecimal: price }, property_type, review_scores, room_type, summary, reviews, accommodates, availability, cleaning_fee, extra_people, guests_included, maximum_nights, minimum_nights, security_deposit, ...rest } = location.state

    const { review_scores_rating: rating, review_scores_value: value } = review_scores
    const bbb = { baths, bedrooms, beds }
    console.log(location.state)

    // object for PayCard
    const payCardDets = { accommodates, availability, cleaning_fee, extra_people, guests_included, maximum_nights, minimum_nights, price, security_deposit, rating }

    return (
        <>
            <div className='container py-4 bg-secondary bg-opacity-25'>
                <div className='row justify-content-start'>
                    <div className='offset-lg-1 col-lg-10 '>
                        <h3 className=" fw-light ">{name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className='offset-lg-1 col-3 col-sm-2 '>
                        <p>rating:{rating}</p>
                    </div>
                    <div className='col-2'>
                        <Reviews reviews={reviews} review_scores={review_scores} />
                    </div>
                    <div className='col-md-4'>
                        <p>{neighborhood}</p>
                    </div>
                </div>
                <div className='row justify-content-center mx-auto'>
                    <div className='col-lg-8'>
                        <img src={image} className="rounded img-fluid" alt="rental"></img>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row my-3'>
                    <div className='col-md-8'>
                        <Host host={host} type={property_type} bbb={bbb} description={description} />
                        <Amenities amenities={amenities} />
                    </div>
                    <PayCard payCardDets={payCardDets} />
                </div>
            </div>
        </>
    );
};
export default LocationDetails