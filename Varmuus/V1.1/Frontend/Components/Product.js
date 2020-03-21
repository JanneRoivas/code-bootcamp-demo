import React from "react";
import "./Categories.css";
import PropTypes from "prop-types"
import Products from "./Products"

export default function Product(props) {    
   return <div className={`product ${props.nimi}`}>{props.kuvaus}
      </div>
}
  



