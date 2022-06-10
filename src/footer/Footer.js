import React from 'react';
import "./Footer.css";
import {Navbar, Container, Nav} from 'react-bootstrap';

function Footer(){

    return(
    <Navbar className='navbarFooter' bg="dark" variant="dark" sticky="bottom">
        <Container className="container">
        <Navbar.Brand className='navbarBrandFooter' href="#home">Maksym Yakhymets</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">LinkedIn</Nav.Link>
        <Nav.Link href="#features">GitHub</Nav.Link>
        <Nav.Link href="https://www.google.com/">Holder</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    );
}


export default Footer;