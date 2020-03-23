import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.css"
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
    return (
        <div className="nav-bar">
            <Navbar classname="nav-baari" color="dark" dark expand="md">
            <Nav className="nav-baari" navbar>
            <NavItem>
              <NavbarBrand href="/">Sannan pulla</NavbarBrand>
            </NavItem>
      
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
                </Nav>
                </Navbar>
        </div>
    );
} 