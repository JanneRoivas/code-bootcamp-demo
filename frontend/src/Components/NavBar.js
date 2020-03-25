import React, { useState, useEffect } from "react";
import "./NavBar.css"
import MakeNavBar from "./MakeNavBar"
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
 } from 'reactstrap';

export default function NavBar(props) {
    const [categories, setcategories] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const res = await fetch('/api/')
            res
                .json()
                .then(data => setcategories(data))
                .catch(err => console.log("error"))
        }
        fetchData()
    }, [])

    const categoryElements = categories.map(
        categoryData => {
            return <MakeNavBar 
            tyyppi={categoryData.tyyppi}
            >
                {categoryData.tyyppi}
                </MakeNavBar>
        })

    return (
        <div className="nav-bar">
            <Navbar classname="nav-baari" color="dark" dark expand="md">
            <Nav className="nav-baari" navbar>
            <NavItem>
              <NavbarBrand href="/">Sannan pulla</NavbarBrand>
            </NavItem>
            {categoryElements}
                </Nav>
                </Navbar>
        </div>
    );
} 
