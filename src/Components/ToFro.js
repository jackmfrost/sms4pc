import {React, useState} from 'react';
import {InputBox} from './InputBox.js';
import './Stylesheets/tofro.css'

export function ToFro() {

    const [To, setTo] = useState(5555555555);
    const [From, setFrom] = useState("");

    const handleChange = event => {
        setFrom(event.target.value);
        sessionStorage.setItem("from", event.target.value);
        if (sessionStorage.getItem("from") == "") {
            sessionStorage.removeItem("from");
        }
    };

    setInterval(() => {
        if (To != sessionStorage.getItem("activeNumber")) {
            setTo(sessionStorage.getItem("activeNumber"));
        }
    }, 1)



    return (
        <div id="ToFro">
            <div id="to">
                <h2>To: { To }</h2>
            </div>
            <div id="from">
                <h2>From: <InputBox value= { From } onChange={ handleChange }/></h2>
            </div>
        </div>

    )
}