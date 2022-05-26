import React from "react";
import AwesomeIcons from "./components/AwesomeIcons.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import NoMatch from "./components/NoMatch.js";
import Location from "./components/Location.js";
import LocationDetails from "./components/LocationDetails.js";




function App() {

    return (
        <div className='container-fluid'>
            <AwesomeIcons />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path=":city" element={<Location />} />
                <Route path=":city/:id" element={<LocationDetails />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    )
}

export default App;