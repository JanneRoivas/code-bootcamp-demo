<<<<<<< HEAD
import React from "react";
=======
import React , { useState, useEffect, Component } from "react";
import PropTypes from "prop-types"
import "./Products.css";
>>>>>>> Lisätty reactstrap elementtejä
import { Card, CardImg, CardLink, CardBody,CardTitle, CardImgOverlay} from 'reactstrap';

/*
function clickedProduct(id){
  alert(id)
  return id
}*/


export default function Products(props) {

    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className={`products`}>
        <Card className="ProductCard" style={{ borderColor: '#333', backgroundColor: '#343a40', width:'18rem'}}>
          <CardLink href ={`../${props.tyyppi}/${props.id}`}>
          <CardImg top width="100%" src={require(`../Pictures/thumbnails/kuvaPieniID_${props.id}.jpg`)} className="productKuva" />
          <CardTitle style={{color:'rgba(255,255,255,.5'}}>{props.nimi}</CardTitle></CardLink>
       </Card>
=======
      <div className={`products ${props.tyyppi}`}>
        <img src={require(`../Pictures/kuvaID_${props.id}.jpg`)} className="productKuva"  href ={`./${props.tyyppi}/${props.id}`}></img>
       {props.nimi}
>>>>>>> Muutettu vielä toimimaan erillisinä elementteinä/sivuina tuotteet ja tuote
=======
      <div className={`products`}>
        
        <Card style={{ borderColor: '#333', backgroundColor: '#343a40', width:'18rem'}}>
        <CardLink href ={`../${props.tyyppi}/${props.id}`}>
        <CardImg top width="100%" src={require(`../Pictures/thumbnails/kuvaPieniID_${props.id}.jpg`)} className="productKuva" />
          <CardTitle  style={{color:'rgba(255,255,255,.5'}}>{props.nimi}</CardTitle></CardLink>
       </Card>
>>>>>>> Lisätty reactstrap elementtejä
      </div>
    )
  }


//  ></img>
//  {<button id="props.id" className="ProductButton" onClick={() => props.clickedProduct(props.id)}>{props.nimi}</button>}