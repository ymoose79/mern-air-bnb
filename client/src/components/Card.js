import React, { useState } from 'react'


// address.street, cost, image, summary, price, images.thumbnail_url, 


const Card = ({ firstListin }) => {

    const { name, summary, images } = firstListin;

    return (
        <div className='card' style={{ width: '18rem' }}>
            {/* <img src={images.picture_url || ''} class="card-img-top" alt="thumbnail"></img> */}
            <div className='card-body'>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{summary}</p>
                <a href="#" className="btn btn-primary">check it out!</a>
            </div>
            {/* <button onClick={() => check({ firstListin })}>click</button> */}
            {/* <button onClick={() => check(images)}>click</button> */}
        </div>
    )
}

export default Card