import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ButtonAction from "../../components/buttonAction";
import ModalProduct from "../../components/ModalProduct";
import "./styles.css";
import ImageProduct from "/assets/Image_producto.png";

const ModalButtons = () => {
  const [showModal, setShowModal] = useState(false);
  const [productModal, setProductModal] = useState(false);

  const onHideModal = () => {
    setProductModal(false);
  };

  const showModalProduct = () => {
    setProductModal(true);
    console.log(productModal);
  };

  return (
    <div className="main">
      {/* Buttons */}
      <div className="main-container">
        <div className="tittle">
          <h3 className="my_products">MIS PRODUCTOS</h3>
          <ButtonAction
            text="Agregar nuevo producto"
            type="button"
            buttonClass="button-primary"
            action={showModalProduct}
          ></ButtonAction>
        </div>
        <ModalProduct show={productModal} onHide={onHideModal}></ModalProduct>
        <Button
          variant="primary"
          className="productButton"
          onClick={() => setShowModal(!showModal)}
        >
          Open Modal 1
        </Button>
        <Button
          variant="primary"
          className="productButton"
          onClick={() => setShowModal(!showModal)}
        >
          Open Modal 2
        </Button>
        <Button
          variant="primary"
          className="productButton"
          onClick={() => setShowModal(!showModal)}
        >
          Open Modal 3
        </Button>
        <Button
          variant="primary"
          className="productButton"
          onClick={() => setShowModal(!showModal)}
        >
          Open Modal 4
        </Button>
        <Button
          variant="primary"
          className="productButton"
          onClick={() => setShowModal(!showModal)}
        >
          Open Modal 5
        </Button>
        <Button
          variant="primary"
          className="productButton"
          onClick={() => setShowModal(!showModal)}
        >
          Open Modal 6
        </Button>
      </div>

      {/* Modals */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(!showModal)}
        className="rounded"
      >
        {/* <Modal.Header closeButton className='modal-card'>
        </Modal.Header> */}
        <img
          src={ImageProduct}
          alt=""
          className="productImage__modal rounded w-100"
        />
        <div className="modal-tittle">
          <Modal.Title>Muñeca Mexicana</Modal.Title>
          <Modal.Title>$100</Modal.Title>
        </div>
        <Modal.Body className="text-start ps-3 body">
          Muñeqas de tela tradicionales.
        </Modal.Body>
        <div className="modal-btn d-flex justify-content-center pb-3">
          <ButtonAction
            text="Editar"
            buttonClass="button-primary mr-3"
            type="button"
          ></ButtonAction>
          <ButtonAction
            text="Eliminar"
            buttonClass="button-secondary"
            type="button"
          ></ButtonAction>
        </div>
      </Modal>
    </div>
  );
};

export default ModalButtons;
