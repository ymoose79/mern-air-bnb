import React from 'react'

const Spinner = ({ hidden }) => {

    let spinner;

    if (!hidden) {
        spinner = <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <div>{spinner}</div>
    )
}

export default Spinner