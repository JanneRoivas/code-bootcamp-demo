import React, { useState, useEffect, useParams } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
=======
//import "./Product.css";
=======
import "./Product.css";
>>>>>>> Lisätty reactstrap elementtejä
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
>>>>>>> Muutettu vielä toimimaan erillisinä elementteinä/sivuina tuotteet ja tuote



export default function Products({match} = match,props) {
   const [product, setProduct] = useState([]);
    
   let {id} = match.params
   let {tyyppi} = match.params

   useEffect(() => {
        async function fetchData(){
            const res = await fetch(`/api/${tyyppi}/${id}`) 
            res
                .json()
                .then(data => setProduct(data))
                .catch(err => console.log("error"))
        }
        fetchData()
    },[])

<<<<<<< HEAD
    

    return (
        <React.Fragment>
            <div className="Product">
                <Card style={{ margin:'auto', borderColor: '#333', backgroundColor: '#343a40', width:'40em'}}>
                    <CardBody>
                        <CardImg src={require(`../Pictures/kuvaID_${id}.jpg`)} alt="ProductKuva" className="ProductKuva"/>
                        <CardTitle style={{color:'white'}}>{product.nimi}</CardTitle>
                        <CardSubtitle style={{color:'rgba(255,255,255,.5'}}>{product.kuvaus}</CardSubtitle>
                        <CardText style={{color:'rgba(255,255,255,1'}} className="ProductText">Ainesosat: {product.ainesosat}</CardText>
=======
    const productElements = product.kuvaus

    return (
        <React.Fragment>
            <div className="Kuva">
                <Card style={{ borderColor: '#333', backgroundColor: '#343a40', width:'40em'}}>
                    <CardBody>
<<<<<<< HEAD
                        <CardTitle>{product.nimi}</CardTitle>
                        <CardText>{productElements}</CardText>
                        <CardImg src={require(`../Pictures/kuvaID_${id}.jpg`)} alt="ProductKuva"/>
>>>>>>> Muutettu vielä toimimaan erillisinä elementteinä/sivuina tuotteet ja tuote
=======
                        <CardImg top width="100%"  src={require(`../Pictures/kuvaID_${id}.jpg`)} alt="ProductKuva" className="ProductKuva"/>
                        <CardTitle style={{color:'white'}}>{product.nimi}</CardTitle>
                        <CardText style={{color:'rgba(255,255,255,.5'}}>{productElements}</CardText>
>>>>>>> Lisätty reactstrap elementtejä
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}          