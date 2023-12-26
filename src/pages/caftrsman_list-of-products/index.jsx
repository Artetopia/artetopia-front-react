import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './styles.css';
import ImageProduct from "/assets/image_producto.png"


const ModalButtons = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  const openModal = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        setShowModal1(true);
        break;
      case 2:
        setShowModal2(true);
        break;
      case 3:
        setShowModal3(true);
        break;
      case 4:
        setShowModal4(true);
        break;
      case 5:
        setShowModal5(true);
        break;
      case 6:
        setShowModal6(true);
        break;
      default:
        break;
    }
  };

  const closeModal = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        setShowModal1(false);
        break;
      case 2:
        setShowModal2(false);
        break;
      case 3:
        setShowModal3(false);
        break;
      case 4:
        setShowModal4(false);
        break;
      case 5:
        setShowModal5(false);
        break;
      case 6:
        setShowModal6(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className='main'>
      {/* Buttons */}
      <div className='main-container'>
       <div className='tittle'>
        <h3 className='my_products'>MIS PRODUCTOS</h3>
        <Button id='tittle-btn'>Agregar nuevo producto</Button>
       </div>

      <Button variant="primary" onClick={() => openModal(1)}  id='custom_btn'>
        Open Modal 1
      </Button>
      <Button variant="primary" onClick={() => openModal(2)} id='custom_btn' >
        Open Modal 2
      </Button>
      <Button variant="primary" onClick={() => openModal(3)}  id='custom_btn'>
        Open Modal 3
      </Button>
      <Button variant="primary" onClick={() => openModal(4)}  id='custom_btn'>
        Open Modal 4
      </Button>
      <Button variant="primary" onClick={() => openModal(5)}  id='custom_btn'>
        Open Modal 5
      </Button>
      <Button variant="primary" onClick={() => openModal(6)} id='custom_btn' >
        Open Modal 6
      </Button>
      </div>

      {/* Modals */}
      <Modal show={showModal1} onHide={() => closeModal(1)} >
        {/* <Modal.Header closeButton className='modal-card'>
        </Modal.Header> */}
        <img src={ImageProduct} alt="" className='image' />
        <div className='modal-tittle'>
        <Modal.Title>Muñeca Mexicana</Modal.Title>
        <Modal.Title>$100</Modal.Title>
        </div>
        <Modal.Body className='text-start ps-3 body' >
           Muñeqas de tela tradicionales.
        </Modal.Body>
        <div className='modal-btn' >
            <Button className='m-2'>Editar</Button>
            <Button className='m-2'>Borrar</Button>
        </div>
      </Modal>

      <Modal show={showModal2} onHide={() => closeModal(2)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Content for Modal 2 goes here.
        </Modal.Body>
      </Modal>

      <Modal show={showModal3} onHide={() => closeModal(3)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 3</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Content for Modal 3 goes here.
        </Modal.Body>
      </Modal>

      <Modal show={showModal4} onHide={() => closeModal(4)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 4</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Content for Modal 4 goes here.
        </Modal.Body>
      </Modal>

      <Modal show={showModal5} onHide={() => closeModal(5)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 5</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Content for Modal 5 goes here.
        </Modal.Body>
      </Modal>

      <Modal show={showModal6} onHide={() => closeModal(6)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 6</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Content for Modal 6 goes here.
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalButtons;
