import React from 'react'
import ReactTooltip from 'react-tooltip';

const Amenities = ({ amenities }) => {
    return (
        <div className="container-md mb-5">
            <div className='row justify-content-md-start py-3'>
                <h3>Amenities</h3>
                <div className='col-md-6'>
                    {amenities.map((amen, i) => {
                        if (i > 7) return;
                        if (i % 2 === 0)
                            return <li key={i}>{amen}</li>
                    })}
                </div>
                <div className='col-md-6'>
                    {amenities.map((amen, i) => {
                        if (i > 7) return;
                        if (i % 2 !== 0)
                            return <li key={i}>{amen}</li>
                    })}
                </div>
            </div>
            <button type="button" className='btn btn-outline-info py-3' data-tip="modal coming soon">See All {amenities.length} Amenities</button>
            <ReactTooltip effect="solid" place="top" />

        </div>
    )
}

export default Amenities