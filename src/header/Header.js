import React, {useState} from 'react';
import "./Header.css";
import resume from "../Profile.pdf";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className="navbarBrand" href="#home">Maksym Yakhymets</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
       <Nav.Link href="#aboutMeTile">About Me</Nav.Link>
       <Nav.Link href="#workExperiencesTile">Work Experience</Nav.Link>
       <Nav.Link href="#projectsTile">Projects</Nav.Link>
       <Nav.Link href="#socialsTile">Socials</Nav.Link>
       <Nav.Link  href={resume} target="_blank">Resume</Nav.Link>
    </Nav>
    <Nav className="ms-auto test">
       <Nav.Link  href="google.com" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="26" width="26"/></Nav.Link>
       <Nav.Link  href="google.com" target="_blank"><img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-verte.png" height="26" width="26"/></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>  
);
}

export default Header;