import React, { useState, useEffect, useParams } from "react";
import "./Products.css";
import MakeProducts from "./MakeProducts"
import MakeNavbar from "./MakeNavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText,CardGroup, CardBody,CardTitle} from 'reactstrap';



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
            <div className="ProductCard">
            <CardGroup>
                {productsElements}
            </CardGroup>
            </div>
        </React.Fragment>
    )
}          