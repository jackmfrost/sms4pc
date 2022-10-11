import React, {useState} from 'react';
import './Stylesheets/logs.css'

export function Log() {

    function getLog() {
        if (sessionStorage.getItem("activeName")) {
            return (JSON.parse(localStorage.getItem("contacts"))[sessionStorage.getItem("activeName")]["log"]);
        }
        return (["No Active Contact"]);
    }

    const [logs, setLogs] = useState(getLog);

    //Every second, refresh list. There has to be a better way :,(
        setInterval(() => {
            //Check if different contact is selected every second
            if (logs != getLog) {
                setLogs(getLog);
            }
        }, 1000);

    if (logs != null) {
        return (
            //Maps the array
            logs.map((message) => <p id="log">{message}</p>)
        );
    } else {
        return (<p>No Active Contact </p>);
    }
}