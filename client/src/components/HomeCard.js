import React from 'react'

const HomeCard = ({ listing }) => {
    const { bathrooms: { $numberDecimal: baths }, bedrooms, beds, price: { $numberDecimal: price }, images, address: { street: neighborhood } } = listing
    if (price > 200) {
        return (
            <div className='card m-2' style={{ width: '18rem' }} >
                <img src={images.picture_url} className="card-img-top" alt="..." />
                <div className='card-body'>
                    <h5 className="card-title">{neighborhood}</h5>
                    <h6 className='align-items-start text-secondary'>{bedrooms}_bedrooms | {beds}_beds | {baths}_baths</h6>
                    {/* <button className="btn btn-primary" onClick={() => handleRouter(listing)} >Check it Out! </button> */}
                    <h6 className="align-items-start text-secondary"> price: <span className='text-dark'> {price} </span></h6>
                </div>
            </div>
        )
    }
}

export default HomeCard