import React , { useState, useEffect, Component } from "react";
import PropTypes from "prop-types"
import "./Products.css";




export default function Products(props) {
    return (
      <div className={`products ${props.tyyppi}`}>
        <button onClick={() => alert(props.id)}>{props.nimi}</button>
      </div>
    );
  }