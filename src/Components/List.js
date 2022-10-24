import React from 'react';
import ReactDOM from 'react-dom/client';
import {AddContact} from './AddContact'
import { ListContacts } from './ListContacts';
import './Stylesheets/list.css'

export function List() {

    function popUp() {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <>
                <div className="contacts">
                    <List />
                </div>
                <div className="rightFrame">
                    <AddContact />
                </div>
            </>
        );
    }

    return (
        <>
            <header>
                <h1>Contacts</h1>
            </header>                
            <hr></hr>
            <div className="contactList">
                <ListContacts />
                <p id="newContact" onClick={popUp}>Add New Contact</p>
            </div>
        </>
    );
}