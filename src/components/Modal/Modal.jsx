import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import "./modal.scss"

function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title className='principal-text' id="example-modal-sizes-title-lg">
          Mis productos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          {props.products.map((product, index) =>
              <Row key={index+1} className='d-md-flex flex-md-nowrap mb-5'> 
                <Col className='body-text order-md-first' xs={6} md={1}>
                  #{index+1} 
                </Col>
                <Col className='order-md-last d-flex justify-content-end' xs={6} md={1}>
                  <i className='order-md-6 edit-icons mx-2 fa fa-pencil' />
                  <i className='order-md-7 edit-icons fa fa-trash-o' />
                </Col>
                <Col className='body-text order-md-2' xs={12} md={2}>
                  <p>{product.name}</p>
                </Col>
                <Col className='body-text order-md-3' xs={12} md={3}>
                  <p>{product.description}</p>
                </Col>
                <Col className='body-text order-md-4' xs={6} md={2}>
                  {product.stock} pz
                </Col>
                <Col className='body-text order-md-5' xs={6} md={3}>
                ${product.price}
                </Col>
              </Row>
            )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="white" className="body-text close-modal-button mt-3 mb-3" onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;