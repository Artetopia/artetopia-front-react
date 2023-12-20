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


const products = [
{
    number: "1",
    name: "Calavera pintada a mano",
    description: "Calavera hecha a mano por artesanos de Leon, Guanajuato. Medidas: 10x20x10 cm. Colores: azul, rojo, rosa, amarillo, azul",
    stock: "50",
    price: "99"

},
{
    number: "2",
    name: "Collar largo artesanal de obsidiana color plata",
    description: "Bonito collar color plata con dije de obsidiana, hecho a mano. Largo: 30 cm. Material: acero inoxidable ",
    stock: "22",
    price: "300"

},
{
    number: "3",
    name: "Jarron de arcilla handmade",
    description: "Gran jarron de arcilla en varios colores. Medidas: 100x20x20 cm",
    stock: "82",
    price: "950"

}
]

const onSubmit = (data) => {
    console.log('data', data)
  }
  
    return (
    <form onSubmit={handleSubmit(onSubmit)} className='mx-2' id="formStep4">
    <Stepper step={CURRENT_PAGE}/>

          <label className='subtitle-text mt-2 d-flex justify-content-center'>Sube tus productos</label>
          <small className='body-text d-flex'>Nombre del articulo <p className='asterisk'> *</p></small> 
          {/* <InputGroup className="mb-3"> */}
            <input 
            {...register("productName", { required: true, minLength: 3, maxLength: 10 })}
            aria-invalid={errors.productName ? "true" : "false"}
            className="border-input-text rounded-5 my-2" 
            aria-label="Default"/>
            {errors.productName?.type === "required" && (
                <p className='text-danger fs-6'>First name is required</p>
            )}
            {errors.productName?.type === "minLength" && (
                <p className='text-danger fs-6'>Caracteres insuficientes</p>
            )}
            {errors.productName?.type === "maxLength" && (
                <p className='text-danger fs-6'>Excediste el total de caracteres</p>
            )}
          {/* </InputGroup> */}
          <small className='body-text d-flex'>Agrega una descripcion del articulo <p className='asterisk'> *</p></small> 
          <textarea className="border-input-text form-control mb-3" placeholder='Agrega una descripcion del articulo' aria-label="With textarea"></textarea>
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
                {/* <InputGroup className="mb-3">
                  <Form.Control className="border-input-text rounded-5" aria-label="Default"/>
                </InputGroup> */}
                <small className='body-text d-flex '>Precio del articulo <p className='asterisk'> *</p></small> 
                {/* <InputGroup className="mb-3">
                  <Form.Control className="border-input-text rounded-5 mb-md-5" placeholder='$' aria-label="Default"/>
                </InputGroup> */}
                <button className="add-show-product rounded-5 mt-4">Añadir  este articulo</button>
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
        <input type="submit" />

        </form>
)}
export default Page4;