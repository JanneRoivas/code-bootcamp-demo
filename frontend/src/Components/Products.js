import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Product from "./Product";
import "./Products.css";
import Category from "./Category"

//import AddProduct from "./AddProduct";

export default function Products(props) {
    const [products, setProducts] = useState([]);
    const {category} = useParams();


    useEffect(() => {
        async function fetchData(){
            const res = await fetch('/api/products')
            res
                .json()
                .then(data => setProducts(data))
                .catch(err => console.log("error"))
        }
        fetchData()
    }, [])


   const productsElements = products 
    .map(
        productData => {
          return <Product
          key={productData.id} 
          tyyppi={productData.tyyppi}
    //      onDelete={() => onDelete(productData.id)
    
          >
          {productData.nimi}</Product>
        }
    )    

    

    const onDelete = (id) => {
        fetch(`/api/products/${id}`, {
            method: 'DELETE'
        })
        .then(deleteProduct => setProducts(products.filter(product => product.id !== id))
        )
    }
    
    return (
        <React.Fragment>
            <div className="Kakut">
                {productsElements}
                {category}
            </div>   

        
        </React.Fragment>
    )
}//    <AddProduct onProductAdded={(newProduct) => setProducts([...products, newProducts])}/>