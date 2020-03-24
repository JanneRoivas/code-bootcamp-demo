import React , { useState, useEffect, Component } from "react";
import PropTypes from "prop-types"
import "./Product.css";

/*
function clickedProduct(id){
  alert(id)
  return id
}*/


export default function Products(props) {

    return (
      <div className={`products ${props.tyyppi}`}>
        <img src={require(`../Pictures/kuvaID_${props.id}.jpg`)} className="productKuva"  href ={`./${props.tyyppi}/${props.id}`}></img>
       {props.nimi}
      </div>
    )
  }

//  ></img>
//  {<button id="props.id" className="ProductButton" onClick={() => props.clickedProduct(props.id)}>{props.nimi}</button>}