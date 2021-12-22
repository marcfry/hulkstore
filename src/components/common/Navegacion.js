import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../common/logo.gif'

const Navegacion = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
        <img
          alt=""
          src={logo}
          width="70"
          height="40"
          className="d-inline-block align-top me-3"
        />
          <Navbar.Brand href="#home">Hulk Store</Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarHulkStore">
            <Nav className="me-auto">
              <NavLink exact={true} to='/'className='nav-link'>Inicio</NavLink>
              <NavLink exact={true} to='/login' className='nav-link'>INGRESAR</NavLink>
              <NavLink exact={true} to='/registro' className='nav-link'>REGISTRARSE</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navegacion;