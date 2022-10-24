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
    let contacts = getContacts();

    if (contacts != null) {
        return (
            //Maps the array
            contacts.map((contactname) =>
            <Contact name= {contactname} title= {JSON.parse(localStorage.getItem('contacts'))[contactname]}/>)
        );
    }
}