import React, { useState, Fragment } from 'react';
import { Form, Button, ProgressBar, Container, Row, Col, Modal } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormFile from '../FormFile/FormFile'
import "./multistep.scss"
import ComponentCarousel from '../Carousel';
import MydModalWithGrid from '../Modal/Modal';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import Stepper from "../Stepper"

const MAX_ALLOWED_FILES_WEBSITE = 6;
const MAX_ALLOWED_FILES_PRODUCT = 10;

const MultiStepForm = () => {
const { register, handleSubmit, formState: {errors} } = useForm();  


const [modalShow, setModalShow] = useState(false);
  
const [profilePic, setProfilePic] = useState(null);
const handleProfilePicChange = (event) => { 
  const file = event.target.files[0]; 
  setProfilePic(file); 
}; 

const [banner, setBanner] = useState(null);
const handleBannerChange = (event) => { 
  const file = event.target.files[0]; 
  setBanner(file); 
}; 

const [websitePics, setWebsitePics] = useState([]);
const handleWebsitePicsChange = (event) => { 
  const eventFilesLength = event.target.files?.length;
  const currentFilesLength = websitePics?.length;
  const totalFiles = eventFilesLength +currentFilesLength
  if(totalFiles > MAX_ALLOWED_FILES_WEBSITE) {
    Swal.fire({
      icon: "error",
      title: "Lo sentimos...",
      text: `Solo se pueden cargar un maximo de ${MAX_ALLOWED_FILES_WEBSITE} imágenes. Por favor, intenta nuevamente`,
      confirmButtonText: "Entendido",
      confirmButtonColor: "#E91E63",
    });
    return;
  }
  const files = event.target.files; 
  setWebsitePics([...websitePics, ...files]); 
}; 

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

  const [step, setStep] = useState(4);
  // const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // handle form submission
  // };
  // onSubmit = handleSubmit((data) => {
  //   console.log(data)
  // })

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
    <div>
        {/* <form onSubmit={handleSubmit(() => {
            console.log("Formulario enviado")
          })}>
          <label htmlFor='productName' className='body-text d-flex '>Nombre del articulo <p className='asterisk'> *</p></label> 
            <input 
            name='productName'
            className="border-input-text rounded-5" 
            type="text" 
            {...register('productName ', {
              required: {
                value: true,
                message: "Titulo requerido"
              },
              minLength: 2,
              maxLength: 20
            }
            )}
            />
            {errors?.productName?.type === 'minLength' && <span>El nombre debe tener al menos 2 caracteres</span>}
          </form> */}
        
<Form>

    <Stepper step={step}/>

      <ProgressBar className='border-progress-bar d-lg-none rounded-5' label={`${step}/7`} variant="custom" now={(step / 7) * 100} />
        {step === 1 && (
          <Form.Group controlId="formStep1">
            <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Informacion personal</Form.Label>
            
  {/* (DAVID) *******PAGINA 1******  */}
          
          </Form.Group>
        )}
        {step === 2 && (
          <Form.Group controlId="formStep2">  
            <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Informacion de tu sitio </Form.Label>

  {/* (DAVID) *******PAGINA 2******  */}

          </Form.Group>
        )}

      {step === 3 && (
        <Form.Group controlId="formStep3">
          <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Sube tus fotos</Form.Label>
          <div className="container m-0 p-0">
            <div className="row">
              <div className="col-12 col-lg-5">
                <small className='body-text d-flex '>Foto de perfil <p className='asterisk'> *</p></small> 
                {/* {profilePic ? <img src={profilePic}/> :<FormFile/>} */}
                <div className='formfile-uploader-container'> 
                  {profilePic  == null ?
                  <FormFile fileType='image/*' controlId="form-1" onChange={handleProfilePicChange} />
                  : ( 
                  <img className='image-uploaded-container d-block m-auto justify-content-center' src={URL.createObjectURL(profilePic)} alt="Selected file" /> 
                  )} 
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <small className='body-text d-flex '>Foto de portada <p className='asterisk'> *</p></small> 
                <div> 
                  {banner  == null ?
                  <FormFile fileType='image/*' controlId="form-2" onChange={handleBannerChange} />
                  : ( 
                  <img className='image-uploaded-container d-block m-auto' src={URL.createObjectURL(banner)} alt="Selected file" /> 
                  )} 
                </div>
              </div>
            </div>
          </div>
          <p className='body-text'>Fotos de tu tienda o artesanias</p>                     
          <div className="container m-0 p-0">
            <div className="row">
              <div className='col-12 col-md-6 mt-3'> 
                {websitePics?.length < MAX_ALLOWED_FILES_WEBSITE &&
                <FormFile fileType='image/*' controlId="form-3" multiple={true} onChange={handleWebsitePicsChange} />
                }
                </div>
              <div className='col-12 col-md-6 mt-3'> 

                {websitePics?.length > 0 && websitePics?.length < MAX_ALLOWED_FILES_WEBSITE && ( 
                <div>
                  {websitePics.map(pic => 
                    <img key={pic} className='image-uploaded-container d-block m-auto' src={URL.createObjectURL(pic)} alt="Selected file" /> 
                  )}
                  <ComponentCarousel files={websitePics}/>
                </div>
                )} 
              </div>
            </div>
          </div>

          <p className='body-text '>{websitePics.length}/{MAX_ALLOWED_FILES_WEBSITE}</p> 
        </Form.Group>
      )}

      {step === 4 && (
        <Form.Group controlId="formStep4">
          <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Sube tus productos</Form.Label>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <input
            {...register("firstName", { required: true, minLength: 3, maxLength: 10 })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p className='text-danger fs-6'>First name is required</p>
          )}
          {errors.firstName?.type === "minLength" && (
            <p className='text-danger fs-6'>Caracteres insuficientes</p>
          )}
          {errors.firstName?.type === "maxLength" && (
            <p className='text-danger fs-6'>Excediste el total de caracteres</p>
          )}
          <input type="submit" />
            </form>
          {/* <InputGroup className="mb-3">
            <Form.Control className="border-input-text rounded-5" aria-label="Default"/>
          </InputGroup> */}
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
                <InputGroup className="mb-3">
                  <Form.Control className="border-input-text rounded-5" aria-label="Default"/>
                </InputGroup>
                <small className='body-text d-flex '>Precio del articulo <p className='asterisk'> *</p></small> 
                <InputGroup className="mb-3">
                  <Form.Control className="border-input-text rounded-5 mb-md-5" placeholder='$' aria-label="Default"/>
                </InputGroup>
                <Button variant="white" className="add-show-product rounded-5 mt-4">Añadir  este articulo</Button>
                <div className="modal-container">
                  <Button variant="white" className="add-show-product mt-2 mb-5 rounded-5" onClick={() => setModalShow(true)}>
                    Ver mis productos
                  </Button>
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
        </Form.Group>
      )}
      {step === 5 && (
        <Form.Group controlId="formStep5">
          <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Elige una plantilla</Form.Label>

{/* (VICTOR) *******PAGINA 5******  */}

        </Form.Group>
      )}
      {step === 6 && (
        <Form.Group controlId="formStep6">
          <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Informacion adicional</Form.Label>

{/* (GUADALUPE) *******PAGINA 6******  */}

        </Form.Group>
      )}
      {step === 7 && (
        <Form.Group controlId="formStep6">
          <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Pagos</Form.Label>
         
{/* (DANIEL) *******PAGINA 7******  */}

        </Form.Group>
      )}
      
      <div className='d-md-flex justify-content-center'>
        {step > 1 && (
          <Button className='handle-buttons back-button d-none d-md-block my-2' variant="white" onClick={handlePrevious}>
            Atras
          </Button>
        )}
        {step < 7 ? (
          <Button type='submit' className='handle-buttons next-button mt-2 mx-md-2' variant="custom" onClick={handleNext}>
            Siguiente
          </Button>)
        
          : (
            <Button className='handle-buttons next-button mt-2 mx-md-2' variant="custom" type="submit">
              Siguiente
            </Button>
        ) }
        {step > 1 && (
          <Button className='handle-buttons back-button d-sm-block d-md-none mt-2 mb-2' variant="white" onClick={handlePrevious}>
            Atras
          </Button>
        )}
      </div>
    </Form>
    </div>
  );
};

export default MultiStepForm;