import React, { useState, useEffect } from "react";
import MakeProducts from "./MakeProducts"
<<<<<<< HEAD
import {CardGroup} from 'reactstrap';
=======
import MakeNavbar from "./MakeNavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText,CardGroup, CardBody,CardTitle} from 'reactstrap';
>>>>>>> Lisätty reactstrap elementtejä



export default function Products({match} = match,props) {

    const [products, setProducts] = useState([]);
   
    
    let {tyyppi} = match.params
    

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(`/api/${tyyppi}`)
            res
                .json()
                .then(data => setProducts(data))
                .catch(err => console.log("error"))
        }
        fetchData()
    }, [])


    const productsElements = products.map(
        productsData => {
          return <MakeProducts 
          key={productsData.id} 
          id={productsData.id}
          tyyppi={productsData.tyyppi}
          nimi={productsData.nimi}
          >
         {productsData}</MakeProducts>
        })


    return (
        <React.Fragment>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="ProductCards">
=======
            <div className="ProductCard">
>>>>>>> Lisätty reactstrap elementtejä
            <CardGroup>
                {productsElements}
            </CardGroup>
            </div>
<<<<<<< HEAD
=======
            <div className="Products">
                {productsElements}</div>
>>>>>>> Muutettu vielä toimimaan erillisinä elementteinä/sivuina tuotteet ja tuote
=======
>>>>>>> Lisätty reactstrap elementtejä
        </React.Fragment>
    )
}          