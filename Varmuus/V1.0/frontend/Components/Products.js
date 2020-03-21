import React from "react";
import PropTypes from "prop-types"
import "./Products.css";
import { render } from "react-dom";



export default function Products(props) {

    const handleClick = e => this.reply_click(e.target.id);
    
    return <div className={`products ${props.tyyppi}`}>
    {props.nimi}
  </div>
}
