import {React} from 'react';
import './Stylesheets/inputbox.css'

export function InputBox(props) {
    return(
        <input 
            type="text"
            className= {props.className}
            placeholder= {props.placeholder}
            onChange={props.onChange}
            value={props.value}>
        </input>
    );
}