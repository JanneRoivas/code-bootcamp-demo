import React, { useState, useEffect, useParams } from "react";
import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';



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
    

    return (
        <React.Fragment>
            <div className="Product">
                <section className="KuvaPuoli">
                    <img src={require(`../Pictures/kuvaID_${id}.jpg`)} alt="ProductKuva" className="ProductKuva"/>
                </section>
                <section className="TekstiPuoli">
                    <h1 className="Nimi">{product.nimi}</h1>
                    <p className="Kuvaus">{product.kuvaus}</p>
                    <p className="Ainesosat">Ainesosat: {product.ainesosat}</p>
                </section>
            </div>
        </React.Fragment>
    )
}          
