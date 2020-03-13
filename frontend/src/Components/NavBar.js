import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.css"

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <Link to="/" className="Logo">SaNNaN PuLLa</Link>
                </li>
                <li>
                    <Link to="./products">Tuotteet</Link>
                </li>
                <li>
                    <Link to="./products">Yhteystiedot</Link>
                </li>
            </ul>
        </div>
    );
} 