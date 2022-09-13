import React from 'react';
import {AddContact} from './AddContact'
import { ListContacts } from './ListContacts';
import './Stylesheets/list.css'

export function List() {
    return (
        //Keep header
        //Replace ListContacts & AddContact with respective components
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