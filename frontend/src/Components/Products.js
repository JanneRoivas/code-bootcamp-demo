import React, { useState, useEffect, useParams } from "react";
import "./Products.css";
import MakeProducts from "./MakeProducts"
import MakeNavbar from "./MakeNavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';



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
          clickedProduct={() => clickedProduct(productsData.id)}
          >
         {productsData}</MakeProducts>
        })

    const [product, setProduct] = useState([]);
    
    // Haetaan sivulle mentäessä ensimmäiset tuotteen tiedot. 
    let firstID = products.map(productsData => productsData.id)
    firstID = firstID[0]
    if (product.kuvaus === undefined && firstID !== undefined) {
        async function fetchData(){
            const res = await fetch(`/api/${tyyppi}/${firstID}`) //voi olla virhe
            res
                .json()
                .then(data => setProduct(data))
                .catch(err => console.log("error"))
        }
        fetchData()
    }   
    
    // Haetaan valitun tuotteen tiedot
    const clickedProduct = (id) => {
        async function fetchData(){
            const res = await fetch(`/api/${tyyppi}/${id}`) //ei nää näin tuu
            res
                .json()
                .then(data => setProduct(data))
                .catch(err => console.log("error"))
        }
        fetchData()
    }

    const productElements = product.kuvaus

    // tehdään varmistus että kuvaID saadaan. Huom! selvitä miten ensimmäisen ehdon saa pois
    let productID
    if (product.id === undefined && firstID === undefined){
        productID = 1
    } else if (product.id !== undefined){
        productID = product.id
    } else {
        productID = firstID
    }
    return (
        <React.Fragment>
            <div className="Products">
                {productsElements}</div>
            <div className="Kuva">
                <Card>
                    <CardBody>
                        <CardTitle>{product.nimi}</CardTitle>
                        <CardText>{productElements}</CardText>
                        <CardImg src={require(`../Pictures/kuvaID_${productID}.jpg`)} alt="ProductKuva"/>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}           /*
           <div className="Kakut">
                {kakutElements}</div>
            <div className="Kakku">
                {kakkuElements}
            </div>   */