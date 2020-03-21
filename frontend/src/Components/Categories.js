import React from "react";
import "./Categories.css";
import PropTypes from "prop-types"


export default function Categories(props) {
   return <div className={`categories ${props.tyyppi}`}>{props.tyyppi}
   </div>
}


//      {props.onDelete && <button onClick={event => props.onDelete()}>X</button>}
/*
Product.propTypes = {
   type: PropTypes.oneOf(['Kakut','Leivokset','Pullat','Tortut','Sesongit']).isRequired,
   children: PropTypes.string.isRequired,
   onDelete: PropTypes.func
}*/