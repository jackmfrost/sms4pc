import React, {useState} from 'react';
import { Contact } from './Contact';    


function getContacts() {
    //Gets contact item from localStorage and turns it from string to JSON
    const contacts = JSON.stringify(localStorage.getItem("contacts"));

    //Creates regex item in which only alphabets are valid; ensures phone numbers will not be added to string
    const regex = new RegExp(/[a-zA-Z]/);

    //Creates empty string where only names, commas, and spaces are allowed
    let str = "";

    //Starts loop that checks every character in contacts string
    for (let i = 0; i < contacts.length; i++) {

        //If character exists, continue; if not, break
        if (contacts[i]) {
            //If character is alphabet, comma, or space, append to str
            if (regex.test(contacts[i]) || contacts[i] == ',' || contacts[i] == ' ') {
                str += contacts[i];
            }
        } 
        else {
            break;
        }

    }
    //Returns the string of names, commas, and spaces
    return (str);
}

export function ListContacts() {

    //String that getContacts returned
    const [Contacts, setContacts] = useState(getContacts);

    //Every 10 seconds, refresh list. There has to be a better way :,(
    setInterval(() => {
        //If contacts was updated, let contacts equal new contact list
        if (Contacts != getContacts) {
            setContacts(getContacts);
        }
    }, 100);

    if (Contacts != 'null') {
        //Splits the Contacts string into an array. Splits every element at the comma
        let arr = Contacts.split(',');
        return (
            //Maps the array
            arr.map((contactname) =>
            <Contact name= {contactname} title= {JSON.parse(localStorage.getItem('contacts'))[contactname]}/>)
        );
    }
}