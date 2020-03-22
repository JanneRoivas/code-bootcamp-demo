import React , { useState, useEffect, Component } from "react";
import PropTypes from "prop-types"
import "./Products.css";

/*
function clickedProduct(id){
  alert(id)
  return id
}*/


export default function Products(props) {
    return (
      <div className={`products ${props.tyyppi}`}>
        {<button className="ProductButton" onClick={(id) => props.clickedProduct(props.id)}>{props.nimi}</button>}
      </div>
    )
  }