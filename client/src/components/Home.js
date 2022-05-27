import React, { useState, useEffect } from "react";
import HomeCard from "./HomeCard.js";


const { REACT_APP_URL } = process.env

function Home() {

    const [twentyListings, setTwentyListings] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${REACT_APP_URL}`)
            const airbnbListings = await response.json(response)
            const topTwenty = airbnbListings.slice(0, 100)
            setTwentyListings(topTwenty)
            console.log(topTwenty[0])
        }
        fetchData();
        return;
    }, []);

    return (
        <div className="container">
            <div className="d-flex flex-wrap justify-content-evenly">
                {twentyListings.map((listing, i) => {
                    return <HomeCard listing={listing} key={i} />
                })}
            </div>
        </div>
    )
}

export default Home