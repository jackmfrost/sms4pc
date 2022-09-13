import React from 'react';
import {AddContact} from './AddContact'
import { ListContacts } from './ListContacts';
import './Stylesheets/list.css'

export function List() {
    return (
        <>
            <header>
                <h1>Contacts</h1>
            </header>                
            <hr></hr>
            <div className="contactList">
                <ListContacts />
                <AddContact />
            </div>
        </>
    );
}