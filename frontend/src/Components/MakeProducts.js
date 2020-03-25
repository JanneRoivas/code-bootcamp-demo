import React from "react";
import { Card, CardImg, CardLink, CardBody,CardTitle, CardImgOverlay} from 'reactstrap';

/*
function clickedProduct(id){
  alert(id)
  return id
}*/


export default function Products(props) {

    return (
      <div className={`products`}>
        <Card className="ProductCard" style={{ borderColor: '#333', backgroundColor: '#343a40', width:'18rem'}}>
          <CardLink href ={`../${props.tyyppi}/${props.id}`}>
          <CardImg top width="100%" src={require(`../Pictures/thumbnails/kuvaPieniID_${props.id}.jpg`)} className="productKuva" />
          <CardTitle style={{color:'rgba(255,255,255,.5'}}>{props.nimi}</CardTitle></CardLink>
       </Card>
      </div>
    )
  }


//  ></img>
//  {<button id="props.id" className="ProductButton" onClick={() => props.clickedProduct(props.id)}>{props.nimi}</button>}