import {React, useState} from 'react';
import {InputBox} from './InputBox.js';
import './Stylesheets/tofro.css'

export function ToFro() {

    const [To, setTo] = useState(sessionStorage.getItem("activeNumber"));
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
            <div>
                <h2>To: {To}</h2>
            </div>
            <div>
                <h2>From: <InputBox value= { From } onChange={ handleChange }/></h2>
            </div>
        </div>

    )
}