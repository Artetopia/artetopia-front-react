import React, { useState } from 'react';
import './styles.css'
import {
  Collapse,
  Navbar as ReactstrapNavbar, // Rename the Navbar component
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../register_navbar_buttons';

const Navbare = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const toggleOffcanxvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <ReactstrapNavbar dark expand="md" className="navbar">
      <NavbarBrand href="/" className="logo"> </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar}>
        {isOpen ? <span className='navbar_icon'>&times;</span> : <span className='navbar_icon'>&#9776;</span>}
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <div className='desktop_menu'>
            <NavItem>
              <NavLink href="/components/" className="text-light">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="text-light">
                Nosotros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="text-light">
                Artesanos
              </NavLink>
            </NavItem>
            <NavbarText className="text-light"></NavbarText>
          </div>
          <div className='desktop_buttons'>
            <Button>Hola es una prueba</Button>
          </div>
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  );
}

export default Navbare;
