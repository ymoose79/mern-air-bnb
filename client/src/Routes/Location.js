import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Spinner from '../components/Spinner'
const { REACT_APP_URL } = process.env



const Location = () => {

    const { city } = useParams()
    const [roomsForLet, setRoomsForLet] = useState([])
    const [hidden, setHidden] = useState(false)


    useEffect(() => {

        async function citySearch(city) {
            const response = await fetch(`${REACT_APP_URL}location?city=${city}`)
            const res = await response.json();
            setRoomsForLet(res)
            setHidden(true);
            console.log(res[1])
        }
        citySearch(city);
        return;
    }, [city]);
    return (
        <div className="d-flex flex-wrap justify-content-evenly">
            <Spinner hidden={hidden} />
            {roomsForLet.map((rooms, i) => {
                return <Card listing={rooms} key={i} />
            })}
        </div>
    )
}

export default Location