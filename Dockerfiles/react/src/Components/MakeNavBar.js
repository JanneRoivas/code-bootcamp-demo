import React, { useState, useEffect } from "react";
import {
    NavItem,
    NavLink
 } from 'reactstrap';

export default function MakeNavBar(props) {    
   return <div className={`navBarCategories ${props.tyyppi}`}>
    <NavItem>
        <NavLink href ={`../${props.tyyppi}`}>{props.tyyppi}</NavLink>
    </NavItem>
      </div>
}