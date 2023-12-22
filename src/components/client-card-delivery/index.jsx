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
      <section className='d-flex align-items-center justify-content-between'>
        <h3>Mis pedidos</h3>
        <div className="d-flex p-5">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Months</DropdownItem>
              <DropdownItem>3 Months</DropdownItem>
              <DropdownItem text>6 Months</DropdownItem>
              <DropdownItem>9 Months</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </section>


      <section className='d-flex flex-wrap'>
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
