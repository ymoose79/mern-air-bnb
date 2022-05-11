import React, { useState, useEffect } from "react";
import Card from './components/Card.js'


function App() {

    const [firstListin, setFirstListin] = useState([])

    useEffect(() => {

        async function fetchData() {
            const response = await fetch(`http://localhost:5000/listingsandreview`)
            const airbnbListings = await response.json()
            // const topTen = airbnbListings.slice(0, 10)
            setFirstListin(airbnbListings[1])
        }
        fetchData();
        return;
    }, []);
    return (
        <div className='container'>
            <div className="d-flex flex-column justify-content-center">
                <h1 className="display-3 text-center mt-5">Bed and Breakfast</h1>
                <input type="text" className="form-control my-3" placeholder="location" />
                <Card firstListin={firstListin} />
            </div>
        </div>
    )
}

export default App;