import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="fixed-top">
            <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand className="text-white fw-bolder fs-2" as={Link} to="/">Travel <span className="agency">Agency</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className="text-white fs-5 nav-item" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className="text-white fs-5 nav-item" as={Link} to="/services">Services</Nav.Link>
    <Nav.Link className="text-white fs-5 nav-item" as={Link} to="/">Pricing</Nav.Link>
    <Nav.Link className="header-button btn btn-lg py-2 px-3 ms-2 text-white" as={Link} to="/login">Login</Nav.Link>
                   
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;