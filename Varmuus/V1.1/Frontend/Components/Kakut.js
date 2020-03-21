import React, { useState, useEffect } from "react";
//import "./Products.css";
import Products from "./Products"
import Product from "./Product";
//import Product from "./Product";


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
          nimi={kakutData.nimi}>
         {kakutData}</Products>
        }
    )
    
    
    return (
        <React.Fragment>
            <div className="Kakut">
                {kakutElements}
            </div>   
        </React.Fragment>
    )
}