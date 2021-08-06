import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../img/logo.jpg";
import NavBarStc from './navbar.stc';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

    
    const NavBar = (props) => {

      return (
    <NavBarStc>
        <Navbar className="w-80" bg="with" expand="lg">
            <Container className="w-100">
                    
                    <Navbar.Brand href="#home">
                    <div className="col-md-4 justify-content-start pr-5">
                        <img src={logo} className="rounded float-left" width="80rem" height="65rem" alt="Logo" />
                    </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-text mx-auto">
                            <Nav.Link href="#home">Genre Controllers</Nav.Link>
                            <Nav.Link href="#link">VR Accessoires</Nav.Link>
                            <Nav.Link href="#home">Media Remotes</Nav.Link>
                            <Nav.Link href="#link">Others</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </NavBarStc>
      );
    }
    
    export default NavBar;