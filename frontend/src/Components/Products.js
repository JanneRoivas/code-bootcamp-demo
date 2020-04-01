import React, { useState, useEffect } from "react"
import MakeProducts from "./MakeProducts"
import {CardGroup} from 'reactstrap'
import "./Products.css";


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
            <div className="ProductCards">
            <CardGroup>
                {productsElements}
            </CardGroup>
            </div>
        </React.Fragment>
    )
}          