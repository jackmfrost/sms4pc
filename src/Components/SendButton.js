import {React} from 'react';
import './Stylesheets/sendbutton.css';


function getData() {

    //Pull from their sessionStorage targets, can be null
    let phone = sessionStorage.getItem("activeNumber");
    let message = sessionStorage.getItem("message");

    //Self explanatory
    console.log(`Phone number = ${phone}`);
    console.log(`Message = ${message}`);
    console.log(`API KEY = ${process.env.REACT_APP_API_KEY}`);
    
    //If phone and message exist, and if there is input in the "from" box, continue; if not, the call will fail. 
    //Every input is prechecked in parent file so API will always call with the special exception of message containing things not allowed by textbelt, such as links.
    if (phone && message && sessionStorage.getItem("from")) {
        console.log("Calling API");
        fetch('https://textbelt.com/text', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                phone: phone,
                //Adds signature is from at end of message
                message: message + ` -${sessionStorage.getItem("from")}`,
                key: process.env.REACT_APP_API_KEY,
            }),
            }).then(response => {
            return response.json();
            }).then(data => {
            console.log(data);
        });

        //TODO Don't let this exceed some amount of chars
        let newContacts = JSON.parse(localStorage.getItem("contacts"));
        newContacts[sessionStorage.getItem("activeName")]["lastMessageSent"] = message;
        localStorage.setItem("contacts", JSON.stringify(newContacts));
    }
    else {
        console.log("API call failed");
    }

}

export function SendButton() {
    return(
        <button 
        className="sendButton"
        type="button"
        onClick={getData}>Send</button>
    );
}