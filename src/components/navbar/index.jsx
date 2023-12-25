import React, { useState } from "react";
import "./styles.css";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
  faFile,
  faCreditCard,
  faListCheck,
  faArrowRightFromBracket,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../register_navbar_buttons";
import ButtonAction from "../buttonAction";

const Navbare = ({ toggleSidebar }) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleNavLinkClick = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      toggleNavbar(); // Close the navbar after clicking a link (optional)
    }
  };

  return (
    <ReactstrapNavbar dark expand="md" className="navbar">
      <NavbarBrand href="/" className="logo"></NavbarBrand>
      <FontAwesomeIcon icon={faBars} className="menuIcon"></FontAwesomeIcon>
      <NavbarToggler onClick={toggleNavbar}>
        {isOpen ? (
          <span className="navbar_icon">&times;</span>
        ) : (
          <span className="navbar_icon">&#9776;</span>
        )}
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <div className="desktop_menu">
            <NavItem>
              <NavLink
                onClick={() => handleNavLinkClick("inicio")}
                className="text-light"
              >
                Inicio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => handleNavLinkClick("nosotros")}
                className="text-light"
              >
                Nosotros
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => handleNavLinkClick("artesanos")}
                className="text-light"
              >
                Artesanos
              </NavLink>
            </NavItem>
            <NavbarText className="text-light"></NavbarText>
          </div>
          <div className="desktop_buttons">
            <Button></Button>
          </div>
        </Nav>
      </Collapse>
      <div className="d-flex align-items-center dropdown">
        <img
          src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"
          alt=""
          className="rounded-circle profileImg"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          onClick={toggleDropdown}
        />
        <div className={`dropdown-menu p-2 ${dropdownOpen ? "show" : ""}`}>
          <a className="dropdown-item" href="#">
            <FontAwesomeIcon icon={faUser} className="mx-2"></FontAwesomeIcon>
            Mi perfil
          </a>
          <a className="dropdown-item" href="#">
            <FontAwesomeIcon
              icon={faListCheck}
              className="mx-2"
            ></FontAwesomeIcon>
            Mi pedidos
          </a>
          <a className="dropdown-item" href="#">
            <FontAwesomeIcon icon={faFile} className="mx-2"></FontAwesomeIcon>
            Plantilla
          </a>
          <a className="dropdown-item" href="#">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="mx-2"
            ></FontAwesomeIcon>
            Pagos
          </a>
          <div className="dropdown-divider"></div>
          <ButtonAction
            buttonClass="button-secondary font-size-small"
            text="Conviértete en artesano"
          ></ButtonAction>
          <div className="dropdown-divider"></div>
          <div className="admin">
            <p className="font-weight-bold dropdown-item m-0">Administrador</p>
            <a className="dropdown-item" href="#">
              <FontAwesomeIcon icon={faHome} className="mx-2"></FontAwesomeIcon>
              Inicio
            </a>
          </div>
          <div className="dropdown-divider"></div>
          <div className="artesano">
            <p className="font-weight-bold dropdown-item m-0">Artesano</p>
            <a className="dropdown-item" href="#">
              <FontAwesomeIcon icon={faHome} className="mx-2"></FontAwesomeIcon>
              Inicio
            </a>
          </div>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="mx-2"
            ></FontAwesomeIcon>
            Cerrar sesión
          </a>
          {/* <a className="dropdown-item">
            <FontAwesomeIcon icon={faUser} className="mx-2"></FontAwesomeIcon>
            Profile
          </a>
          <a className="dropdown-item">
            Settings
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item">
            Logout
          </a> */}
        </div>
        <div className="position-relative cart-container mr-3">
          <div className="cart-icon p-3 text-white rounded-circle">
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </div>
          <div className="item-count position-absolute rounded-circle bg-danger text-white">
            3
          </div>
        </div>
      </div>
    </ReactstrapNavbar>
  );
};

export default Navbare;
