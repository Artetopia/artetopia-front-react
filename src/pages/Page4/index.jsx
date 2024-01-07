import FormFile from "../../components/FormFile";
import MydModalWithGrid from "../../components/Modal/Modal";
import React, { useState } from "react";
import Stepper from "../../components/Stepper";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import "../../components/Stepper/stepper.css";

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
    const newArray = productPics.filter(productPic => !productPic.name.includes(pic.name))
    setProductPics([...newArray])
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [products, setProducts] = useState([]);
  
  const onSubmit = (data) => {
    const date = new Date();
    const newProduct = {...data, id: date.getTime()}
    setProducts([...products, newProduct]);
  };

  const onHideModal = () => setModalShow(false);
  const onEditProduct = (e) => {
    console.log("editando", e)
  }
  const onDeleteProduct = (selectedProduct) => {
    const newProducts = products.filter(product => product?.id !== selectedProduct?.id);
    setProducts(newProducts);
  }

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="mx-2" id="formStep4">
      <Stepper step={CURRENT_PAGE} />

      <label className="subtitle-text mt-2 d-flex justify-content-center">
        Sube tus productos
      </label>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <small className="body-text d-flex">
              Nombre del articulo <p className="asterisk"> *</p>
            </small>
            <input
              {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 10,
              })}
              aria-invalid={errors.name ? "true" : "false"}
              className="border-input-text rounded-5 p-2"
              aria-label="Default"
            />
            {errors.name?.type === "required" && (
              <p className="error-message-custom text-danger">
                * Campo requerido
              </p>
            )}
            {errors.name?.type === "minLength" && (
              <p className="error-message-custom text-danger">
                El nombre es muy corto
              </p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className="error-message-custom text-danger">
                Excediste el total de caracteres
              </p>
            )}
            <small className="body-text d-flex">
              Agrega una descripcion del articulo <p className="asterisk"> *</p>
            </small>
            <textarea
              className="border-input-text form-control p-2"
              placeholder="Agrega una descripcion del articulo"
              aria-label="With textarea"
              {...register("description", {
                required: true,
                minLength: 2,
                maxLength: 200,
              })}
              aria-invalid={errors.description ? "true" : "false"}
            ></textarea>
            {errors.description?.type === "required" && (
              <p className="error-message-custom text-danger">
                * Campo requerido
              </p>
            )}
            {errors.description?.type === "minLength" && (
              <p className="error-message-custom text-danger">
                La descripcion es muy corta
              </p>
            )}
            {errors.description?.type === "maxLength" && (
              <p className="error-message-custom text-danger">
                Excediste el total de caracteres
              </p>
            )}
          </div>
          <div className="col-md-6">
            <small className="body-text d-flex">
              Cantidad en inventario <p className="asterisk"> *</p>
            </small>
            <input
              type="number"
              className="border-input-text rounded-5 p-2"
              {...register("stock", {
                required: true,
                min: 0,
                max: 9999,
                pattern: /[0-9]/i,
              })}
              aria-invalid={errors.stock ? "true" : "false"}
              aria-label="Default"
            />
            {errors.stock?.type === "required" && (
              <p className="error-message-custom text-danger">
                * Campo requerido
              </p>
            )}
            {errors.stock?.type === "min" && (
              <p className="error-message-custom text-danger">
                La cantidad no es correcta
              </p>
            )}
            {errors.stock?.type === "max" && (
              <p className="error-message-custom text-danger">
                Excediste la cantidad máxima
              </p>
            )}
            {errors.stock?.type === "pattern" && (
              <p className="error-message-custom text-danger">
                Solo se permiten números
              </p>
            )}
            <small className="body-text d-flex ">
              Precio del articulo <p className="asterisk"> *</p>
            </small>
            <input
              type="number"
              step="0.01"
              className="border-input-text rounded-5 p-2"
              placeholder="$ "
              {...register("price", {
                required: true,
                min: 0,
                max: 100000,
                pattern: /[0-9]/i,
              })}
              aria-invalid={errors.price ? "true" : "false"}
              aria-label="Default"
            />
            {errors.price?.type === "required" && (
              <p className="error-message-custom text-danger">
                * Campo requerido
              </p>
            )}
            {errors.price?.type === "min" && (
              <p className="error-message-custom text-danger">
                La cantidad no es correcta
              </p>
            )}
            {errors.price?.type === "max" && (
              <p className="error-message-custom text-danger">
                Excediste la cantidad máxima
              </p>
            )}
            {errors.stock?.type === "pattern" && (
              <p className="error-message-custom text-danger">
                Solo se permiten números
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
                      <>
                        <FormFile
                        {...register("productImage", {
                          required: true,
                        })}
                        fileType="image/*"
                        controlId="form-3"
                        multiple={true}
                        onChange={handleProductPicsChange}
                        />
                        {errors.productImage?.type === "required" && (
                          <p className="error-message-custom text-danger">
                            * Campo requerido
                          </p>
                        )}
                        </>
                    )}
                </div>

                {productPics.map((pic) => (
                    <div key={`${pic} ${pic.lastModified}`} className="col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center d-inline-block position-relative">
                        <img
                            key={pic}
                            className="image-uploaded-container "
                            src={URL.createObjectURL(pic)}
                            alt="Selected file"
                        />
                    <i className='close-icon-custom fa fa-trash-o position-absolute top-0 end-0 m-1' onClick={() => handleDeleteSelectedFile(pic)}></i>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex d-md-inline justify-content-center mt-4">
        <button type="submit" className="add-show-product rounded-5 mb-2">
          Añadir este articulo
        </button>
      </div>
    </form>
    <div className="modal-container d-flex justify-content-center mx-2">
      <button
        className="add-show-product mb-5 rounded-5"
        onClick={() => setModalShow(true)}>
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
    <div className="d-flex  justify-content-center mt-4">
          <button type="submit" className="add-show-product rounded-5 mb-1">
            Siguiente 
          </button>
        </div>
    <div className="d-flex  justify-content-center mx-2">
          <button className="back-button-custom m-auto">
            Atras
          </button>
        </div>
   </div>
  );
  
};
export default Page4;
