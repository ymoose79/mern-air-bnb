import React, { useState, useEffect } from "react";
import Card from './components/Card.js'
import SearchBar from "./components/SearchBar.js";
import AwesomeIcons from "./components/AwesomeIcons.js";
const { REACT_APP_URL } = process.env

function App() {

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
        <div className='container'>
            <h1 className="display-3 text-center mt-5">Bed and Breakfast</h1>
            <AwesomeIcons />
            <SearchBar />
            <div className="d-flex flex-wrap justify-content-evenly">
                {twentyListings.map((listing) => {
                    return <Card key={listing.id} listing={listing} />
                })}
            </div>
        </div>
    )
}

export default App;