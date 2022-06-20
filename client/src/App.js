import React from "react";
import NavBar from "./components/NavBar.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.js";
import NoMatch from "./Routes/NoMatch.js";
import Location from "./Routes/Location.js";
import LocationDetails from "./Routes/LocationDetails.js";
import Rentee from "./Routes/Rentee.js";
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {

    const { REACT_APP_CLIENT_ID } = process.env

    return (
        <div className='container-lg'>
            <GoogleOAuthProvider clientId={REACT_APP_CLIENT_ID}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path=":city" element={<Location />} />
                    <Route path=":city/:id" element={<LocationDetails />} />
                    <Route path="/rentee" element={<Rentee />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </GoogleOAuthProvider>
        </div>
    )
}

export default App;