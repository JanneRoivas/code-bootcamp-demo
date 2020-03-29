import React from 'react';
import "./Home.css";
import Image from 'react-bootstrap/Image'
import Overlay from 'react-bootstrap/Overlay'

export default function(props) {
    return (
        <div className="Home">
            <Image className="HomePicture" src={require(`../Pictures/taustaKuva.jpg`)} roundedCircle/>
            <p className="HomeText">Tämä sivusto on tehty vain code bootcamp -koulutuksen demo-ohjelmaksi.<br></br>Kuvat ja tekstit on varastettu elonen.fi sivustolta.</p>
        </div>
    )
}