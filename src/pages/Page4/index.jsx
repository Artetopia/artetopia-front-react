import FormFile from "../../components/FormFile";
import MydModalWithGrid from "../../components/Modal/Modal";
import React, { useState } from "react";
import Stepper from "../../components/Stepper";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import "../../components/Stepper/stepper.css";
import ButtonAction from "../../components/buttonAction";

const MIN_ALLOWED_FILES_PRODUCT = 1;
const MAX_ALLOWED_FILES_PRODUCT = 10;
const CURRENT_PAGE = 4;

const Page4 = () => {
  const [modalShow, setModalShow] = useState(false);

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
    reset,
    formState: { errors },
  } = useForm();

  const [products, setProducts] = useState([]);

  const onSubmit = (data) => {
    data.productImage = [...productPics];
    const date = new Date();
    const newProduct = { ...data, id: date.getTime() };
    data.productImage.length >= MIN_ALLOWED_FILES_PRODUCT
      ? setProducts([...products, newProduct])
      : Swal.fire({
          icon: "error",
          title: "Ups...",
          text: `Debes subir al menos ${MIN_ALLOWED_FILES_PRODUCT} imagen. Intenta nuevamente`,
          confirmButtonText: "Entendido",
          confirmButtonColor: "#E91E63",
        });
        reset();
        setProductPics([]);
    return;
  };

  const onHideModal = () => setModalShow(false);
  const onEditProduct = (e) => {
    console.log("editando", e);
  };
  const onDeleteProduct = (selectedProduct) => {
    const newProducts = products.filter(
      (product) => product?.id !== selectedProduct?.id
    );
    setProducts(newProducts);
  };

  return (
    <div className="container ">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-2" id="formStep4">
        <Stepper step={CURRENT_PAGE} />

        <h3 className="step-title-custom d-flex justify-content-center mt-2 mt-lg-0">
          Sube tus productos
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="body-text d-flex">
                  Nombre del articulo <p className="asterisk"> *</p>
                </label>
                <input
                  {...register("name", {
                    required: { value: true, message: "El campo es requerido" },
                    minLength: { value: 2, message: "Mínimo 2 caracteres" },
                    maxLength: { value: 10, message: "Máximo 10 caracteres" },
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                  className="border-input-text rounded-5 p-2"
                  aria-label="Default"
                />
                {errors.name && (
                  <p className="text-danger m-0">{errors.name.message}</p>
                )}
              </div>
              <div className="form-group mb-3">
                <label className="body-text d-flex">
                  Agrega una descripcion del articulo
                  <p className="asterisk"> *</p>
                </label>
                <textarea
                  className="border-input-text form-control p-2"
                  placeholder="Agrega una descripcion del articulo"
                  aria-label="With textarea"
                  {...register("description", {
                    required: { value: true, message: "El campo es requerido" },
                    minLength: { value: 2, message: "Mínimo 2 caracteres" },
                    maxLength: { value: 200, message: "Máximo 10 caracteres" },
                  })}
                  aria-invalid={errors.description ? "true" : "false"}
                ></textarea>
                {errors.description && (
                  <p className="m-0 text-danger">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="body-text d-flex">
                  Cantidad en inventario <p className="asterisk"> *</p>
                </label>
                <input
                  type="number"
                  className="border-input-text rounded-5 p-2"
                  {...register("stock", {
                    required: {value:true, message: "El campo es requerido"},
                    min: {value: 1, message: "El valor mínimo es 1"},
                    max: {value: 9999, message: "El valor máximo es 9999"}
                  })}
                  aria-invalid={errors.stock ? "true" : "false"}
                  aria-label="Default"
                />
                {errors.stock && (
                  <p className="m-0 text-danger">
                   {errors.stock.message}
                  </p>
                )}
              </div>
              <small className="body-text d-flex ">
                Precio del articulo <p className="asterisk"> *</p>
              </small>
              <input
                type="number"
                step="0.01"
                className="border-input-text rounded-5 p-2"
                placeholder="$ "
                {...register("price", {
                  required: {value: true, message: "El campo es requerido"},
                  min: {value: 0, message: "El precio debe de ser mayor a 0"}
                })}
                aria-invalid={errors.price ? "true" : "false"}
                aria-label="Default"
              />
              {errors.price && (
                <p className="m-0 text-danger">
                  {errors.price.message}
                </p>
              )}
            </div>
            <small className="body-text d-flex">
              Fotos del articulo <p className="asterisk"> *</p>
            </small>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  {productPics?.length < MAX_ALLOWED_FILES_PRODUCT && (
                    <FormFile
                      fileType="image/*"
                      controlId="form-4"
                      multiple={true}
                      onChange={handleProductPicsChange}
                    />
                  )}
                </div>

                {productPics.map((pic) => (
                  <div
                    key={`${pic} ${pic.lastModified}`}
                    className="col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center d-inline-block position-relative"
                  >
                    <img
                      key={pic}
                      className="image-uploaded-container "
                      src={URL.createObjectURL(pic)}
                      alt="Selected file"
                    />
                    <i
                      className="close-icon-custom fa fa-trash-o position-absolute top-0 end-0 m-1"
                      onClick={() => handleDeleteSelectedFile(pic)}
                    ></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="d-flex d-md-inline justify-content-center mt-4">
            <button className="add-show-product rounded-5 mb-2">
              Añadir este articulo
            </button>
          </div>
        </div>
      </form>
      <div className="modal-container container px-xs-5">
        <button
          type="text"
          className="add-show-product mb-5 rounded-5"
          onClick={() => setModalShow(true)}
        >
          Ver mis productos
        </button>
        <MydModalWithGrid
          show={modalShow}
          onHide={onHideModal}
          products={products}
          onEditProduct={onEditProduct}
          onDeleteProduct={onDeleteProduct}
        />
      </div>
      <div className="container controllers-buttons-custom d-block d-md-flex flex-nowrap justify-content-center mt-4">
        <div className="order-md-2 text-center mt-0">
          <ButtonAction
            buttonClass="button-primary"
            text="Siguiente"
            type="button"
          ></ButtonAction>
        </div>
        <ButtonAction
            buttonClass="button-secondary mr-3"
            text="Atras"
            action="../register/photos"
          ></ButtonAction>
      </div>
    </div>
  );
};
export default Page4;
