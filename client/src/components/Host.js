import React from 'react'

const Host = ({ host, type, bbb, description }) => {

    const { host_about: about, host_is_superhost: superhost, host_name: name, host_neighbourhood: neighborhood, host_picture_url: pic, host_thumbnail_url: thumbnail } = host;


    const { bedrooms, baths, beds } = bbb

    return (
        <>
            <div className='container-md justify-content-start mt-3'>
                <div className="row">
                    <div className='col-10 col-md-auto'>
                        <h4>{type} hosted by {name}</h4>
                        <p className='align-items-start'>{bedrooms}_bedrooms | {beds}_beds | {baths}_baths</p>
                    </div>
                    <div className='col-2 col-md-auto'>
                        <img src={thumbnail} className="rounded-circle" alt="host" ></img>
                    </div>
                </div>
                <div className='row bg-light border border-info'>
                    <div className='my-3 col overflow-auto ' style={{ height: "20vh" }}>
                        <p className='p-2'>{description}</p>
                    </div>
                </div>
            </div>
        </>)
}

export default Host