import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.css"


export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <Link to="/" className="Logo">Sanna pulla</Link>
                </li>
                <li>
                    <Link to="./kakut">Kakut</Link>
                </li>
                <li>
                    <Link to="./Leivoikset">Leivokset</Link>
                </li>
                <li>
                    <Link to="./Pullat">Pullat</Link>
                </li>
                <li>
                    <Link to="./Tortut">Tortut</Link>
                </li>
            </ul>
        </div>
    );
} 