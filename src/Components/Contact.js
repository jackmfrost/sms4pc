import React, { useState } from 'react';
import './Stylesheets/contact.css'

export function Contact(prop) {
    const [selected, setSelected] = useState("name");

    function deleteContact() {
        let prevContacts = JSON.parse(localStorage.getItem("contacts"));

        if (prop.name == sessionStorage.getItem("activeName")) {
            sessionStorage.removeItem("activeName");
            sessionStorage.removeItem("activeNumber");
        }
        delete prevContacts[prop.name];
        localStorage.setItem("contacts", JSON.stringify(prevContacts));
        window.location.reload(false);
    }

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

        if (selected == "name") {
            setSelected("selectedName");        
            
            //Set the recipient number to the value of key=prop.name in contacts
            sessionStorage.setItem("activeNumber", contacts[prop.name]["number"]);
            sessionStorage.setItem("activeName", prop.name);
        }
        else {
            setSelected("name");
            sessionStorage.removeItem("activeNumber");
            sessionStorage.removeItem("activeName");
        }
    }

    if (lms) {
        if (lms.length <= 26) {
            return(
                <div className="contact" title= {JSON.parse(localStorage.getItem('contacts'))[prop.name].number}>
                    <span id="namespan"><p onClick={handleEvent} id={selected}>{prop.name}</p></span>
                    <span id="deletespan" onClick={deleteContact}><p id="delete">Delete</p></span>
                    <p id="lms">Last sent: {lms}</p>
                </div>
            );
        }
        else {
            return(
                <div className="contact" title= {JSON.parse(localStorage.getItem('contacts'))[prop.name].number}>
                    <span id="namespan"><p onClick={handleEvent} id={selected}>{prop.name}</p></span>
                    <span id="deletespan" onClick={deleteContact}><p id="delete">Delete</p></span>
                    <p id="lms">Last sent: {lms.substring(0, 26)}...</p>
                </div>
            );
        }
    }
    else {
        return(
            <div className="contact" title= {JSON.parse(localStorage.getItem('contacts'))[prop.name].number}>
                    <span id="namespan"><p onClick={handleEvent} id={selected}>{prop.name}</p></span>
                    <span id="deletespan" onClick={deleteContact}><p id="delete">Delete</p></span>
                <p id="lms">Last sent:</p>
            </div>
        );
    }


}