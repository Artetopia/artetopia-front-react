import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import ButtonAction from "../buttonAction";
import "./styles.css";

function MydModalWithGrid(props) {
  console.log("products modal", props.products);

  return (
    <Modal
      {...props}
      aria-labelledby="example-modal-sizes-title-lg"
      className="modal__container"
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="principal-text"
          id="example-modal-sizes-title-lg"
        >
          Mis productos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre del articulo</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Inventario</th>
                  <th scope="col">Precio</th>
                  <th scope=""></th>
                </tr>
              </thead>
              <tbody>
                {props.products.map((product, index) => (
                  <>
                    <tr>
                      <td scope="row">{index + 1}</td>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.stock}</td>
                      <td>${product.price}</td>
                      <td>
                        <div className="col-sm-6 d-flex">
                          <i
                            className="edit-icons mx-2 fa fa-pencil"
                            onClick={() => props.onEditProduct(product)}
                          />
                          <i
                            className="edit-icons fa fa-trash-o"
                            onClick={() => props.onDeleteProduct(product)}
                          />
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <ButtonAction text="Cerrar" buttonClass="button-secondary" type="button" action={props.onHide}></ButtonAction>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
