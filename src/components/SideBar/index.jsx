import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShop,
  faListCheck,
  faFile,
  faCreditCard,
  faUserPlus,
  faCircleUser,
  faCircleXmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SideBar = ({ isOpen, toggle, userRole }) => {
  const itemsMenu = [
    {
      name: "Mi perfil",
      goesTo: "",
      type: "link",
      icon: faUser,
      id: 1,
      role: "Artesano",
    },
    {
      name: "Mis productos",
      goesTo: "",
      type: "link",
      icon: faShop,
      id: 2,
      role: "Artesano",
    },
    {
      name: "Mis pedidos",
      goesTo: "",
      type: "link",
      icon: faListCheck,
      id: 3,
      role: "Artesano",
    },
    {
      name: "Plantilla",
      goesTo: "",
      type: "link",
      icon: faFile,
      id: 4,
      role: "Artesano",
    },
    {
      name: "Pagos",
      goesTo: "/artesano/payments",
      type: "link",
      icon: faCreditCard,
      id: 5,
      role: "Artesano",
    },
    {
      name: "Artesanos pendientes",
      goesTo: "",
      type: "link",
      icon: faUserPlus,
      id: 6,
      role: "Admin",
    },
    {
      name: "Artesanos",
      goesTo: "",
      type: "link",
      icon: faUser,
      id: 7,
      role: "Admin",
    },
    {
      name: "Pedidos",
      goesTo: "",
      type: "link",
      icon: faListCheck,
      id: 8,
      role: "Admin",
    },
    {
      name: "Usuarios",
      goesTo: "",
      type: "link",
      icon: faCircleUser,
      id: 9,
      role: "Admin",
    },
  ];
  const [itemsMenuFilter, setItemsMenuFilter] = useState([]);

  useEffect(() => {
    const setMenuItems = () => {
      const menuItems = itemsMenu.filter((data) => data.role == userRole);
      setItemsMenuFilter(menuItems);
    };
    setMenuItems();
  }, []);

  return (
    <>
      <div className={isOpen ? "sidebar is-open p-3" : "sidebar p-3"}>
        <div className="sidebar-header">
          <span onClick={toggle}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
          <div className="d-flex align-items-center">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="rounded-circle profileImage"
            />
            <p className="mx-3 mb-0">Nombre del usuario</p>
          </div>
        </div>
        <div className="side-menu mt-3">
          <Nav vertical className="list-unstyled pb-3">
            {itemsMenuFilter.map((data) => {
              return (
                <>
                  <NavItem className="navLink my-1 p-2">
                    <Link to={data.goesTo}>
                      <FontAwesomeIcon icon={data.icon} className="mr-2" />
                      {data.name}
                    </Link>
                  </NavItem>
                </>
              );
            })}
            <NavItem className="navLink my-1 p-2">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="mr-2"
                />
                Cerrar sesión
              </Link>
            </NavItem>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
