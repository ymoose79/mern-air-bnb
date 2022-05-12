import React, { useState, useEffect } from "react";



const SearchBar = () => {


    const [location, setLocation] = useState('');
    const handleInputChange = (e) => { setLocation(e.target.value) }

    // const localSearch = db.collection('listingsandreviews').find()


    return (
        <div>
            <input type="text" className="form-control my-3" placeholder="location" value={location} onChange={handleInputChange}></input>
        </div>
    )
}

export default SearchBar