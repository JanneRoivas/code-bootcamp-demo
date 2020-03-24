import React, { useState, useEffect, useParams } from "react";
import "./Product.css";
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
                <Card style={{ borderColor: '#333', backgroundColor: '#343a40', width:'40em'}}>
                    <CardBody>
                        <CardImg top width="100%"  src={require(`../Pictures/kuvaID_${id}.jpg`)} alt="ProductKuva" className="ProductKuva"/>
                        <CardTitle style={{color:'white'}}>{product.nimi}</CardTitle>
                        <CardText style={{color:'rgba(255,255,255,.5'}}>{productElements}</CardText>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    )
}          