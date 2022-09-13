import React from 'react';
import './Stylesheets/contact.css'

export function Contact(prop) {

    //Handles user clicking a contact name
    function handleEvent() {
        //Gets the current list of contacts and parses it to JSON
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        
        //Set the recipient number to the value of key=prop.name in contacts
        sessionStorage.setItem("activeNumber", contacts[prop.name]);
    }

    return(
        <div className="contact" title= {JSON.parse(localStorage.getItem('contacts'))[prop.name]}>
            <p onClick={handleEvent}>{prop.name}</p>
            <p>Last Message Sent</p>
        </div>
    );
}