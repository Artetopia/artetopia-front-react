import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import "./modal.scss"

function MydModalWithGrid(props) {
  console.log('props', props)
  console.log('products', props.products)
  console.log('products.number', props.products[1].number)

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title className='principal-text' id="contained-modal-title-vcenter">
          Mis productos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          {props.products.map(product =>
              <Row key={product.number} className='mb-5'> 
                <Col xs={6} md={8}>
                  #{product.number}
                </Col>
                <Col className='d-flex justify-content-end' xs={6} md={4}>
                  iconos
                </Col>
                <Col xs={12} md={4}>
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                </Col>
                <Col xs={6} md={8}>
                  {product.stock} pz
                </Col>
                <Col className='' xs={6} md={4}>
                ${product.price}
                </Col>
              </Row>
            )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="white" className="add-product mt-3 mb-3" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;