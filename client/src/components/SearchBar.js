import React, { useState } from "react";
const { REACT_APP_URL } = process.env

const SearchBar = () => {


    const [location, setLocation] = useState('');
    const handleOnChange = function (e) {
        e.preventDefault();
        setLocation(e.target.value)
    }

    async function citySearch(e) {
        e.preventDefault();
        const response = await fetch(`${REACT_APP_URL}location?city=${location}`)
        const res = await response.json();
        console.log(res[1])
    }

    return (
        <div>
            <form onSubmit={citySearch}>
                <input type="text" className="form-control my-3" placeholder="location" onChange={handleOnChange}></input>
                <button>submit</button>
            </form>
        </div>
    )
}

export default SearchBar