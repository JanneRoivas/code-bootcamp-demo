import React from "react";
import "./Categories.css";
import PropTypes from "prop-types"


export default function Category(props) {
   return <div className={`categories ${props}`}>
      {props}
    </div>
}
//      {props.onDelete && <button onClick={event => props.onDelete()}>X</button>}
/*
Product.propTypes = {
   type: PropTypes.oneOf(['Kakut','Leivokset','Pullat','Tortut','Sesongit']).isRequired,
   children: PropTypes.string.isRequired,
   onDelete: PropTypes.func
}*/