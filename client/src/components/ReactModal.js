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

    return (
        <Modal show={open}>
            <Modal.Header>Hi</Modal.Header>
            <Modal.Body>asdfasdf</Modal.Body>
            <Modal.Footer>This is the footer
                <button onClick={openModalState(open)}>close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReactModal