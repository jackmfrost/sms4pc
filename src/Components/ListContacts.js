import React, {useState} from 'react';
import { Contact } from './Contact';    


function getContacts() {
    if (localStorage.getItem("contacts")) {
        return (
            Object.keys(JSON.parse(localStorage.getItem("contacts")))
        );
    }
}

export function ListContacts() {

    //String that getContacts returned
    const [Contacts, setContacts] = useState(getContacts);

    //Every second, refresh list. There has to be a better way :,(
    setInterval(() => {
        //If contacts was updated, change it in storage
        if (Contacts != getContacts) {
            setContacts(getContacts);
        }
    }, 1000);

    if (Contacts != null) {
        return (
            //Maps the array
            Contacts.map((contactname) =>
            <Contact name= {contactname} title= {JSON.parse(localStorage.getItem('contacts'))[contactname]}/>)
        );
    }

}