import React from "react";
import "./Products.css";
import PropTypes from "prop-types"


export default function Product(props) {
   return <div className={`product ${props.tyyppi}`}>
      {props.children}
    </div>
}
//      {props.onDelete && <button onClick={event => props.onDelete()}>X</button>}
/*
Product.propTypes = {
   type: PropTypes.oneOf(['Kakut','Leivokset','Pullat','Tortut','Sesongit']).isRequired,
   children: PropTypes.string.isRequired,
   onDelete: PropTypes.func
}*/