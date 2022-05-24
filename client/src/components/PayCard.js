import React from 'react'
import LeftRightTextAlign from './LeftRightTextAlign'

const PayCard = ({ payCardDets }) => {

    const { accommodates, availability, cleaning_fee, extra_people, guests_included, maximum_nights, minimum_nights, price, security_deposit, rating } = payCardDets;

    const check = () => console.log(payCardDets)
    return (
        <>
            <div className='col-md-4 mt-3 border rounded-2 shadow'>

                <LeftRightTextAlign
                    leftText={<p className='fw-bold'>${Math.trunc(price)}<span className='fw-light'> per night</span></p >}
                    rightText={<p className='text-end fw-light'>rating: <span className='fw-bold'>{rating}</span> of 100</p >}
                    title={true}
                />

                <div className='row border rounded-2 mx-1'>
                    <div className='col-6 border'>
                        <label className="mt-3">checkIn</label>
                    </div>
                    <div className='col-6 border'>
                        <label className="mt-3">checkOut</label>
                    </div>
                    <div className='col border'>
                        <label className="mt-3">guests</label>
                    </div>
                </div>
                <div className='row my-4 mx-2'>
                    <button type='button' className='btn btn-danger' onClick={check}>Reserve</button>
                </div>
                <LeftRightTextAlign
                    leftText={<p className='text-decoration-underline'>$1000 x 4 nights</p>}
                    rightText={<p className='text-end text-decoration-underline'>$4000</p>}
                />
                <LeftRightTextAlign
                    leftText={<p className='text-decoration-underline'>Cleaning fee</p>}
                    rightText={<p className='text-end text-decoration-underline'>${cleaning_fee ? Math.trunc(cleaning_fee.$numberDecimal) : 'n/a'}</p>}
                />
                <LeftRightTextAlign
                    leftText={<p className='text-decoration-underline'>Additional Fees</p>}
                    rightText={<p className='text-end text-decoration-underline'>$0</p>}
                />
                <LeftRightTextAlign
                    leftText={<p>Total</p>}
                    rightText={<p className='fw-bold text-end'>$$$$</p>}
                    title={true}
                    border={true}
                />
            </div>
        </>
    )
}

export default PayCard