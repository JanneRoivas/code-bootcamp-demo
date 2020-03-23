import React , { useState, useEffect, Component } from "react";
import PropTypes from "prop-types"
import "./Products.css";
import div from 'react-bootstrap/divWithClassName';

/*
function clickedProduct(id){
  alert(id)
  return id
}*/


export default function Products(props) {

    return (
      <div className={`products ${props.tyyppi}`}>
        <img src={require(`../Pictures/kuvaID_${props.id}.jpg`)} className="productKuva" onClick={() => props.clickedProduct(props.id)}></img>
        <p className="productNimi">{props.nimi}</p>
      </div>
    )
  }

//  ></img>
//  {<button id="props.id" className="ProductButton" onClick={() => props.clickedProduct(props.id)}>{props.nimi}</button>}