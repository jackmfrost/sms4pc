import {React, useState} from 'react';
import {InputBox} from './InputBox.js';
import './Stylesheets/phone.css';

export function Phone() {
    const [phone, setPhone] = useState("");

    const handleChange = event => {
        setPhone(event.target.value);
        sessionStorage.setItem("phone", event.target.value);
    };

    return(
        <InputBox 
        className="phone" 
        placeholder="Phone Number (5555555555)"
        value={ phone }
        onChange={ handleChange } />
    );
}