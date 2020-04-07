import React from 'react';
import "./Logged.css";

export default function(props) {

    function logOut() {
        sessionStorage.removeItem('isAuthenticated')
        alert("Olet kirjautunut ulos."); 
        window.location.assign('./')

    }

    return (
        <div className="Logged">
            <p className="LoggedText">Nämä sivut tulevat jos tulevat.</p>
            <button onClick={logOut}>Kirjaudu ulos.</button>
        </div>
    )
}