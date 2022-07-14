import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom'

function Navigation() {

    return (
        <>
            <Navbar fixed="top" className='CustomNav' expand="md">
                <Container fluid>
                    <Navbar.Brand className='text-white' as={Link} to="/"><Image src='./AE_LOGO.png' className='nav-logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" ><HiMenu /></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='custom-link-navbar effect1' as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link className='custom-link-navbar effect1' as={Link} to="/services" >Our Services</Nav.Link>
                            <Nav.Link className='custom-link-navbar effect1' as={Link} to="/galary" >Galary</Nav.Link>
                            <Nav.Link className='custom-link-navbar effect1' as={Link} to="/about" >About us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;