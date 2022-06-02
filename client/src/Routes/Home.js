import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import HomeCard from "../components/HomeCard"


// const { REACT_APP_URL } = process.env

function Home() {

    const [twentyListings, setTwentyListings] = useState([])
    const [hidden, setHidden] = useState(false)



    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/.netlify/functions/airbnb_spoof`)
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
        <div className="container">
            <div className="d-flex flex-wrap justify-content-evenly">
                <Spinner hidden={hidden} />
                {twentyListings.map((listing, i) => {
                    return <HomeCard listing={listing} key={i} />
                })}
            </div>
        </div>
    )
}

export default Home