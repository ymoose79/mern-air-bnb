import React from "react";
import NavBar from "./components/NavBar.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.js";
import NoMatch from "./Routes/NoMatch.js";
import Location from "./Routes/Location.js";
import LocationDetails from "./Routes/LocationDetails.js";
import Rentee from "./Routes/Rentee.js";



function App() {
    return (
        <div className='container-lg'>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path=":city" element={<Location />} />
                <Route path=":city/:id" element={<LocationDetails />} />
                <Route path="/rentee" element={<Rentee />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    )
}

export default App;