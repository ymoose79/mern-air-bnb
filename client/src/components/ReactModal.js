/*
    - title
    - "welcome"
    - phone number
    - continue 
        or
    continue w/ FB, Google, Apple, email...
*/

import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { GoogleLogin } from '@react-oauth/google';
import "bootstrap/dist/css/bootstrap.min.css";

const ReactModal = ({ open, openModalState }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [signUp, setSignUp] = useState(true)

    function check() { console.log(name) }
    const handleChange = (e) => { e.preventDefault(); console.log(e.target); setName(e.target.value) }
    const handleSubmit = () => { }
    const switchMode = () => { setSignUp(!signUp) }

    return (


        <Modal show={open} centered aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header id="contained-modal-title-vcenter">Welcome
                <button className='btn' onClick={switchMode}>{signUp ? "Click here to Login" : "Click here to register"}</button></Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="d-grid gap-2 mx-5">
                        {signUp &&
                            <input type="text" className="form-control" value={name} placeholder="Full Name" onChange={handleChange} required={true} />
                        }
                        <input type="email" className="form-control" value={email} placeholder="Email" onChange={handleChange} />
                        <input type="password" className="form-control" value={password} placeholder="Password" onChange={handleChange} />
                        <button type="submit" className='btn btn-primary'>submit</button>
                    </div>
                </form>
                <hr />
                <h6 className="text-center">or</h6>
                <div className='d-grid gap-2'>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                    <button onClick={check}>facebook</button>
                </div>
            </Modal.Body>
            <Modal.Footer>This is the footer
                <button onClick={openModalState(open)}>close</button>
            </Modal.Footer>
        </Modal >
    )
}

export default ReactModal