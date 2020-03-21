import React, { useState, useEffect } from "react";
import "./Products.css";
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

    const kakutElements = kakut/*.filter(kakut => kakut.tyyppi === "Kakut")*/
    .map(
        kakutData => {
            return Products(kakutData)
            }
      )

   /* const kakkuElements = kakut
    .map(
        kakkuData => {
            return Product(kakkuData)
        }

    ) */

    return (
        <React.Fragment>
            <div className="Kakut">
                {kakutElements}
            </div>   
        </React.Fragment>
    )
}