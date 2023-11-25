// HeaderComponent.js
import React, { useState } from 'react';
import './header.css'
import {
  Collapse,
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
  NavbarText,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import Button from '../buttons'
import image from '../../assets/hero-image.svg'
import imagePlayButtton from '../../assets/play-button.svg'
import topDescription from '../../assets/top_descripcion.svg'


function HeaderComponent() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const toggleOffcanxvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" className="navbar">
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
            <Button></Button>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
      

      <div className='hero_section_desktop'>
      <section className='hero_section'>
      <img src={topDescription} alt="" className='top_description' />
      <h1 className='title'>Bienvenido a <span className='pink_artetopia'>ARTETOPIA</span></h1>
      <p className='intro_hero'>Un espacio donde la creatividad y la artesanía se fusionan. Explora nuestra amplia selección de productos únicos, cuidadosamente elaborados a mano por talentosos artesanos de México.</p>
      <div className='hero_flex_button_icon'>
      <button className="registrarse_hero">Regístrarse</button>
      <div className='desktop_video'>
      <img src={imagePlayButtton} alt="Icono para visualisar video" className='desktop_video_icon' />
      <span className='video_description'>Ver Video</span>
      </div>
      </div>
      </section>
      <img src={image} alt="Artesana" className='hero_image' />
      </div>
    </div>
  );
}

export default HeaderComponent;

