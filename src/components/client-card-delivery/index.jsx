import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PinkButton from "../pink_button";
import "./styles.css";
import CardImage from "../../assets/client.png";

const ClientCard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>

      <div className='main-container'>
      <section className='d-flex align-items-center justify-content-between m-2 p-5'>
        <h3>Mis pedidos</h3>
        <div className="d-flex justify-content-center align-items-center p-5">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Months</DropdownItem>
              <DropdownItem text>3 Months</DropdownItem>
              <DropdownItem text >6 Months</DropdownItem>
              <DropdownItem text>9 Months</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </section>


      <section className='d-flex flex-wrap justify-content-center'>
      <div className="card">
        <div className="cardImage">
          <img src={CardImage} alt="pedido" className="cardImage" />
        </div>
        <div>
          <h4>Pedido numero</h4>
          <p>Pedido el 18/11/2023</p>
          <p>1 artículo</p>
          <PinkButton buttonText="Vista detalle" />
        </div>
      </div>
      <div className="card">
        <div className="cardImage">
          <img src={CardImage} alt="pedido" className="cardImage" />
        </div>
        <div>
          <h4>Pedido numero</h4>
          <p>Pedido el 18/11/2023</p>
          <p>1 artículo</p>
          <PinkButton buttonText="Vista detalle" />
        </div>
      </div>
      <div className="card">
        <div className="cardImage">
          <img src={CardImage} alt="pedido" className="cardImage" />
        </div>
        <div>
          <h4>Pedido numero</h4>
          <p>Pedido el 18/11/2023</p>
          <p>1 artículo</p>
          <PinkButton buttonText="Vista detalle" />
        </div>
      </div>
      <div className="card">
        <div className="cardImage">
          <img src={CardImage} alt="pedido" className="cardImage" />
        </div>
        <div>
          <h4>Pedido numero</h4>
          <p>Pedido el 18/11/2023</p>
          <p>1 artículo</p>
          <PinkButton buttonText="Vista detalle" />
        </div>
      </div>
      <div className="card">
        <div className="cardImage">
          <img src={CardImage} alt="pedido" className="cardImage" />
        </div>
        <div>
          <h4>Pedido numero</h4>
          <p>Pedido el 18/11/2023</p>
          <p>1 artículo</p>
          <PinkButton buttonText="Vista detalle" />
        </div>
      </div>
      </section>
      </div>
    </>
  );
};

export default ClientCard;
