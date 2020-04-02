import React, { useState, useEffect } from "react";
import "./NavBar.css"
import MakeNavBar from "./MakeNavBar"
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';

export default function NavBar(props) {
    const [categories, setcategories] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const res = await fetch('/api/')
            res
                .json()
                .then(data => setcategories(data))
                .catch(err => alert("Yhteysvirhe ladatessa tietokannasta"))
        }
        fetchData()
    }, [])

    let categoryElements
    try {
    categoryElements = (categories || []).map(
        categoryData => {
            return <MakeNavBar 
            tyyppi={categoryData.tyyppi}
            >
            {categoryData.tyyppi}
            </MakeNavBar>
        })
    } catch {categoryElements = [] && alert("Virhe ladatessa tietokannasta")}        

    return ( 
        <div className="nav-bar">
            <Navbar classname="nav-baari" color="dark" dark expand="md">
                <Nav className="nav-baari" navbar>
                    <NavItem>
                        <NavbarBrand href="/">Sannan pulla</NavbarBrand>
                    </NavItem>
                    {categoryElements}
                    <NavItem>
                        <NavLink href="/Yhteystiedot">Yhteystiedot</NavLink>
                    </NavItem>                   
                </Nav>
            </Navbar>
        </div>
    )
} 
