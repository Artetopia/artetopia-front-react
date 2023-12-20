import { Button, Form, InputGroup } from "react-bootstrap";
import FormFile from "../../components/FormFile/FormFile";
import MydModalWithGrid from "../../components/Modal/Modal";
import React, { useState, Fragment  } from "react";
import Stepper from "../../components/Stepper";
import Swal from 'sweetalert2';
import {useForm} from "react-hook-form"

const MAX_ALLOWED_FILES_PRODUCT = 10;
const CURRENT_PAGE = 4;

const Page4 = () => {
const [modalShow, setModalShow] = useState(false);

const [productPics, setProductPics] = useState([]);
const handleProductPicsChange = (event) => { 
  const eventFilesLength = event.target.files?.length;
  const currentFilesLength = productPics?.length;
  const totalFiles = eventFilesLength +currentFilesLength
  if(totalFiles > MAX_ALLOWED_FILES_PRODUCT) {
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

const { register, handleSubmit, formState: {errors} } = useForm();  

const [products, setProducts] = useState ([{
    number: "1",
    name: "Calavera pintada a mano",
    description: "Calavera hecha a mano por artesanos de Leon, Guanajuato. Medidas: 10x20x10 cm. Colores: azul, rojo, rosa, amarillo, azul",
    stock: "50",
    price: "99"

},])
// const products = [
// {
//     number: "1",
//     name: "Calavera pintada a mano",
//     description: "Calavera hecha a mano por artesanos de Leon, Guanajuato. Medidas: 10x20x10 cm. Colores: azul, rojo, rosa, amarillo, azul",
//     stock: "50",
//     price: "99"

// },
// {
//     number: "2",
//     name: "Collar largo artesanal de obsidiana color plata",
//     description: "Bonito collar color plata con dije de obsidiana, hecho a mano. Largo: 30 cm. Material: acero inoxidable ",
//     stock: "22",
//     price: "300"

// },
// {
//     number: "3",
//     name: "Jarron de arcilla handmade",
//     description: "Gran jarron de arcilla en varios colores. Medidas: 100x20x20 cm",
//     stock: "82",
//     price: "950"

// }
// ]

const onSubmit = (data) => {
    setProducts([...products, data])
  }
  
    return (
    <form onSubmit={handleSubmit(onSubmit)} className='mx-2' id="formStep4">
    <Stepper step={CURRENT_PAGE}/>

        <label className='subtitle-text mt-2 d-flex justify-content-center'>Sube tus productos</label>
        <small className='body-text d-flex'>Nombre del articulo <p className='asterisk'> *</p></small> 
        <input 
        {...register("name", { required: true, minLength: 2, maxLength: 10 })}
        aria-invalid={errors.name ? "true" : "false"}
        className="border-input-text rounded-5 my-2 p-2" 
        aria-label="Default"/>
        {errors.name?.type === "required" && (
            <p className='error-message-custom text-danger'>* Campo requerido</p>
        )}
        {errors.name?.type === "minLength" && (
            <p className='error-message-custom text-danger'>El nombre es muy corto</p>
        )}
        {errors.name?.type === "maxLength" && (
            <p className='error-message-custom text-danger'>Excediste el total de caracteres</p>
        )}
        <small className='body-text d-flex'>Agrega una descripcion del articulo <p className='asterisk'> *</p></small> 
        <textarea 
        className="border-input-text form-control mb-3 p-2" 
        placeholder='Agrega una descripcion del articulo' 
        aria-label="With textarea"
        {...register("description", { required: true, minLength: 2, maxLength: 200 })}
        aria-invalid={errors.description ? "true" : "false"}
        >
        </textarea>
        {errors.description?.type === "required" && (
            <p className='error-message-custom text-danger'>* Campo requerido</p>
        )}
        {errors.description?.type === "minLength" && (
            <p className='error-message-custom text-danger'>La descripcion es muy corta</p>
        )}
        {errors.description?.type === "maxLength" && (
            <p className='error-message-custom text-danger'>Excediste el total de caracteres</p>
        )}
          <div className="container m-0 p-0">
            <div className="row">
                <small className='body-text d-flex'>Fotos del articulo <p className='asterisk'> *</p></small> 
                  {productPics?.length < MAX_ALLOWED_FILES_PRODUCT &&
                  <div className="col-12 col-md-4">
                    <FormFile fileType='image/*' controlId="form-3" multiple={true} onChange={handleProductPicsChange} />
                  </div>  
                  }
                {productPics?.length > 0 && ( 
                  <div className='row'>
                    {productPics.map(pic => 
                    (<div key={pic} className='col-12  col-md-4'>
                      <img  className='image-uploaded-container product-images-container d-block m-auto' src={URL.createObjectURL(pic)} alt="Selected file" /> 
                    </div>)
                    )}
                  </div>
                )} 
              <div className="col-12 col-md-4">
                <small className='body-text d-flex'>Cantidad en inventario <p className='asterisk'> *</p></small> 
                <input 
                type='number'
                className="border-input-text rounded-5 p-2"
                {...register("stock", { required: true, min: 0, max: 10000})}
                aria-invalid={errors.stock ? "true" : "false"}
                aria-label="Default"/>
                {errors.stock?.type === "required" && (
                    <p className='error-message-custom text-danger'>* Campo requerido</p>
                )}
                {errors.stock?.type === "min" && (
                    <p className='error-message-custom text-danger'>La cantidad no es correcta</p>
                )}
                {errors.stock?.type === "max" && (
                    <p className='error-message-custom text-danger'>Excediste la cantidad máxima</p>
                )}
                <small className='body-text d-flex '>Precio del articulo <p className='asterisk'> *</p></small> 
                <input 
                type='number'
                step="0.01"
                className="border-input-text rounded-5 p-2"
                placeholder="$ "
                {...register("price", { required: true, min: 0, max: 100000})}
                aria-invalid={errors.price ? "true" : "false"}
                aria-label="Default"/>
                {errors.price?.type === "required" && (
                    <p className='error-message-custom text-danger'>* Campo requerido</p>
                )}
                {errors.price?.type === "min" && (
                    <p className='error-message-custom text-danger'>La cantidad no es correcta</p>
                )}
                {errors.price?.type === "max" && (
                    <p className='error-message-custom text-danger'>Excediste la cantidad máxima</p>
                )}                
                <button type='submit' className="add-show-product rounded-5 mt-4">Añadir  este articulo</button>
                
                <div className="modal-container">
                  <button className="add-show-product mt-2 mb-5 rounded-5" onClick={() => setModalShow(true)}>
                    Ver mis productos
                  </button>
                  <MydModalWithGrid
                    show={modalShow} 
                    onHide={() => setModalShow(false)} 
                    products={products}
                  />
                </div>
              </div>
              <p className='body-text '>{productPics.length}/{MAX_ALLOWED_FILES_PRODUCT}</p> 
            </div>
          </div>

        </form>
)}
export default Page4;