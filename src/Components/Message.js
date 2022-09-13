import {React, useState} from 'react';
import {InputBox} from './InputBox.js';
import './Stylesheets/message.css';

export function Message() {
    const [message, setMessage] = useState("");

    const handleChange = event => {
        setMessage(event.target.value);
        sessionStorage.setItem("message", event.target.value);

        //If message input is blank, delete message from sessionStorage. Probably improves performance, probably doesn't who knows lmao
        if (sessionStorage.getItem("message") == "") {
            sessionStorage.removeItem("message");
        }
    };

    return(
        <InputBox 
        className="message" 
        placeholder="Message"
        value={message}
        onChange={ handleChange } />
    );
}