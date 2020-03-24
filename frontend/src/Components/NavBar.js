import {Link} from "react-router-dom";
import React, { useState, useEffect, useParams } from "react";
import "./NavBar.css"
import MakeNavBar from "./MakeNavBar"
import {   Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText } from 'reactstrap';

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
/*
                <NavItem>
                    <NavLink href ="./kakut">Kakut</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Leivoikset">Leivokset</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Pullat">Pullat</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Tortut">Tortut</NavLink>
                </NavItem>
                */