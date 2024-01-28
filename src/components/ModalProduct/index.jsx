import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import ButtonAction from "../buttonAction";
import FormFile from "../FormFile";
import Swal from "sweetalert2";
import "./styles.css";
import { useForm } from "react-hook-form";

const MAX_ALLOWED_FILES_PRODUCT = 10;

function ModalProduct(props) {
  const [productPics, setProductPics] = useState([]);
  const handleProductPicsChange = (event) => {
    const eventFilesLength = event.target.files?.length;
    const currentFilesLength = productPics?.length;
    const totalFiles = eventFilesLength + currentFilesLength;
    if (totalFiles > MAX_ALLOWED_FILES_PRODUCT) {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos...",
        text: `Solo se pueden cargar un maximo de ${MAX_ALLOWED_FILES_PRODUCT} imágenes. Por favor, intenta nuevamente`,
        confirmButtonText: "Entendido",
        confirmButtonColor: "#E91E63",
      });
      return;
    }
    const files = event.target.files;
    setProductPics([...productPics, ...files]);
    console.log(productPics);
  };
  const handleDeleteSelectedFile = (pic) => {
    const newArray = productPics.filter(
      (productPic) => !productPic.name.includes(pic.name)
    );
    setProductPics([...newArray]);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Modal
      {...props}
      aria-labelledby="example-modal-sizes-title-lg"
      className="modalProduct__container"
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="principal-text"
          id="example-modal-sizes-title-lg"
        >
          Añadir producto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form onSubmit={handleSubmit((data) => console.log(data))}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="m-0">Nombre del artículo</Form.Label>
                  <Form.Control
                    className="primary-input"
                    type="text"
                    {...register("name", {
                        required: {value: true, message: "El campo es requerido"},
                        minLength: { value: 2, message: "Mínimo 2 caracteres" },
                        maxLength: { value: 10, message: "Máximo 10 caracteres" }
                    })}
                  />
                  {errors.name && (
                    <p className="m-0 text-danger">
                        {errors.name.message}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="m-0">Descripción</Form.Label>
                  <Form.Control
                  as="textarea"
                  rows={3}
                    className="primary-input"
                    type="text"
                    {...register("description", {
                        required: {value: true, message: "El campo es requerido"},
                        minLength: { value: 2, message: "Mínimo 2 caracteres" },
                        maxLength: { value: 200, message: "Máximo 10 caracteres" }
                    })}
                  />
                  {errors.description && (
                    <p className="m-0 text-danger">{errors.description.message}</p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="m-0">Cantidad en inventario</Form.Label>
                  <Form.Control
                    className="primary-input"
                    type="text"
                    {...register("stock", {
                      required:{value: true, message: "El campo es requerido"},
                      minLength: {value: 1, message: "Minímo 1 en cantidad en stock"},
                    })}
                  />
                  {errors.stock && (
                    <p className="m-0 text-danger">{errors.stock.message}</p>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="m-0">Precio</Form.Label>
                  <Form.Control
                    className="primary-input"
                    type="text"
                    {...register("price", {
                      required: {value: true, message: "El campo es requerido"},
                      minLength: {value: 1, message: "El precio minímo es 1 peso"}
                    })}
                  />
                  {errors.price && (
                    <p className="m-0 text-danger">{errors.price.message}</p>
                  )}
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="">Imagenes del producto</Form.Label>
                  <FormFile
                    fileType="image/*"
                    controlId="form-4"
                    multiple={true}
                    onChange={handleProductPicsChange}
                  />
                </Form.Group>
              </Col>
              {productPics.map((pic) => (
                <Col key={`${pic} ${pic.lastModified}`} md={3} className="mb-3">
                  <div className="d-flex flex-column align-items-center position-relative">
                    <img
                      key={pic}
                      className="image-uploaded-container w-100"
                      src={URL.createObjectURL(pic)}
                      alt="Selected file"
                    />
                    <i
                      className="close-icon-custom fa fa-trash-o mt-2 position-absolute top-0 end-0"
                      onClick={() => handleDeleteSelectedFile(pic)}
                    ></i>
                  </div>
                </Col>
              ))}
            </Row>
            <ButtonAction buttonClass="button-primary" type="submit" text="Guardar"></ButtonAction>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default ModalProduct;