import React, { useState } from 'react';
import './styles.css';
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../register_navbar_buttons';

const Navbare = ({onToggleSidebar}) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const toggleOffcanxvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleNavLinkClick = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      toggleNavbar(); // Close the navbar after clicking a link (optional)
    }
  };

  return (
    <ReactstrapNavbar dark expand="md" className="navbar">
      <NavbarBrand href="/" className="logo"></NavbarBrand>
      <FontAwesomeIcon icon={faBars} className="menuIcon" onClick={onToggleSidebar}></FontAwesomeIcon>
      <NavbarToggler onClick={toggleNavbar}>
        {isOpen ? <span className='navbar_icon'>&times;</span> : <span className='navbar_icon'>&#9776;</span>}
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <div className='desktop_menu'>
            <NavItem>
              <NavLink onClick={() => handleNavLinkClick('inicio')} className="text-light">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleNavLinkClick('nosotros')} className="text-light">
                Nosotros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleNavLinkClick('artesanos')} className="text-light">
                Artesanos
              </NavLink>
            </NavItem>
            <NavbarText className="text-light"></NavbarText>
          </div>
          <div className='desktop_buttons'>
            <Button></Button>
          </div>
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  );
};

export default Navbare;
