import React, { useState } from 'react';
import './Stylesheets/contact.css'

export function Contact(prop) {

    let lastMessage;

    if (JSON.parse(localStorage.getItem("contacts"))[prop.name]["log"] != null) {
        let messages = JSON.parse(localStorage.getItem("contacts"))[prop.name]["log"];
        let length = messages.length;
        lastMessage = messages[length - 1];
    }

    const [lms, setLms] = useState(lastMessage);

    //Every 10 seconds, refresh list. There has to be a better way :,(
        setInterval(() => {
            //If lastMessageSent was updated, change it in storage
            if (lms != lastMessage) {
                setLms(lastMessage);
            }
        }, 1000);

    //Handles user clicking a contact name
    function handleEvent() {
        //Gets the current list of contacts and parses it to JSON
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        
        //Set the recipient number to the value of key=prop.name in contacts
        sessionStorage.setItem("activeNumber", contacts[prop.name]["number"]);

        sessionStorage.setItem("activeName", prop.name);
    }

    if (lms.length <= 26) {
        return(
            <div className="contact" title= {JSON.parse(localStorage.getItem('contacts'))[prop.name]}>
                <p onClick={handleEvent} id="name">{prop.name}</p>
                <p id="lms">Last sent: {lms}</p>
            </div>
        );
    }
    else {
        return(
            <div className="contact" title= {JSON.parse(localStorage.getItem('contacts'))[prop.name]}>
                <p onClick={handleEvent} id="name">{prop.name}</p>
                <p id="lms">Last sent: {lms.substring(0, 26)}...</p>
            </div>
            
        );
    }

}