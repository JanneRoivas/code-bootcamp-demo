import React, { useState, useEffect } from "react";
import "./Kakut.css";
import Products from "./Products"
import Product from "./Product";
//import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Div,  UncontrolledAlert,Input } from 'reactstrap';



export default function Kakut(props) {

    const [kakut, setKakut] = useState([]);
   
    useEffect(() => {
        async function fetchData(){
            const res = await fetch('/api/kakut')
            res
                .json()
                .then(data => setKakut(data))
                .catch(err => console.log("error"))
        }
        fetchData()
    }, [])
        
    const kakutElements = kakut.map(
        kakutData => {
          return <Products 
          key={kakutData.id} 
          id={kakutData.id}
          tyyppi={kakutData.tyyppi}
          nimi={kakutData.nimi}
          clickedProduct={() => clickedProduct(kakutData.id)}
          >
         {kakutData}</Products>
        }
    )
    const [product, setProduct] = useState([]);
    
    // Haetaan sivulle mentäessä ensimmäiset tuotteen tiedot. 
    let firstID = kakut.map(kakutData => kakutData.id)
    firstID = firstID[0]
    if (product.kuvaus === undefined && firstID !== undefined) {
        async function fetchData(){
            const res = await fetch(`/api/kakut/${firstID}`)
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
            const res = await fetch(`/api/kakut/${id}`)
            res
                .json()
                .then(data => setProduct(data))
                .catch(err => console.log("error"))
        }
        fetchData()
    }

    const kakkuElements = product.kuvaus

    // tehdään varmistus että kuvaID saadaan. Huom! selvitä miten ensimmäisen ehdon saa pois
    let kakkuID
    if (product.id === undefined && firstID === undefined){
        kakkuID = 1
    } else if (product.id !== undefined){
        kakkuID = product.id
    } else {
        kakkuID = firstID
    }
    return (
        <React.Fragment>
            <div className="Kakut">
                {kakutElements}</div>
            <div className="Kakku">
                {kakkuElements}
            </div>   
            <div className="Kuva">
                <img src={require(`../Pictures/kuvaID_${kakkuID}.jpg`)} alt="kakkuKuva"></img>
            </div>
        </React.Fragment>
    )
}