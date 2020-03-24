import React, { useState, useEffect, useParams } from "react";
//import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';



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

    const productElements = product.kuvaus

    return (
        <React.Fragment>
            <div className="Kuva">
                <Card>
                    <CardBody>
                        <CardTitle>{product.nimi}</CardTitle>
                        <CardText>{productElements}</CardText>
                        <CardImg src={require(`../Pictures/kuvaID_${id}.jpg`)} alt="ProductKuva"/>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}          