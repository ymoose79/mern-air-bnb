/*
    - title
    - "welcome"
    - phone number
    - continue 
        or
    continue w/ FB, Google, Apple, email...
*/

import React from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const ReactModal = ({ open, openModalState }) => {

    function check() { console.log('apple') }

    return (
        <Modal show={open} centered aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header id="contained-modal-title-vcenter">Hi </Modal.Header>
            <Modal.Body><button onClick={check}>facebook</button></Modal.Body>
            <Modal.Footer>This is the footer
                <button onClick={openModalState(open)}>close</button>
            </Modal.Footer>
        </Modal >
    )
}

export default ReactModal