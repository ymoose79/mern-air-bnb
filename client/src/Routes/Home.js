import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import HomeCard from "../components/HomeCard"


const { REACT_APP_URL } = process.env

function Home() {

    const [twentyListings, setTwentyListings] = useState([])
    const [hidden, setHidden] = useState(false)



    useEffect(() => {
        async function fetchData() {
            // Development
            const response = await fetch(`${REACT_APP_URL}airbnb_spoof`)
            // // production
            // const response = await fetch(`${REACT_APP_URL}`)
            const airbnbListings = await response.json(response)
            const topTwenty = airbnbListings.slice(0, 100)
            setTwentyListings(topTwenty)
            console.log(topTwenty[0])
            setHidden(true);
        }
        fetchData();
        return;
    }, [hidden]);

    return (
        <>
            <div className='d-flex justify-content-center'>
                <Spinner hidden={hidden} />
            </div>
            <div className="d-flex flex-wrap justify-content-evenly">
                {twentyListings.map((listing, i) => {
                    return <HomeCard listing={listing} key={i} />
                })}
            </div>
        </>
    )
}

export default Home