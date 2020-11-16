import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" variant="light" expand="lg" className="py-4">
                <Link to="/home">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="header-link">Home</Link>
                        <Link to="#" className="header-link">About</Link>
                        <Link to="#" className="header-link">Service</Link>
                        <Link to="#" className="header-link">Concerns</Link>
                        <Link to="#" className="header-link">Event</Link>
                        <Link to="#" className="header-link">Contact</Link>
                        <Link to="/dashboard">
                            <Button variant="info" className="header-button">Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;