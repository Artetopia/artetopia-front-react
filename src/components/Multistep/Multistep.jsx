import React, { useState } from 'react';
import { Form, Button, ProgressBar, Container, Row, Col, Modal } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import StepOneIcon from '../StepIcons/StepOneIcon';
import StepTwoIcon from '../StepIcons/StepTwo';
import StepThreeIcon from '../StepIcons/StepThreeIcon';
import StepFourIcon from '../StepIcons/StepFourIcon';
import StepFiveIcon from '../StepIcons/StepFiveIcon';
import StepSixIcon from '../StepIcons/StepSixIcon';
import StepSevenIcon from '../StepIcons/StepSevenIcon';
import FormFile from '../FormFile/FormFile'
import "./multistep.scss"
import ComponentCarousel from '../Carousel';
import MydModalWithGrid from '../Modal/Modal';
import Swal from 'sweetalert2';

const MAX_ALLOWED_FILES = 6;

const MultiStepForm = () => {
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
  if(totalFiles > MAX_ALLOWED_FILES) {
    Swal.fire({
      icon: "error",
      title: "Lo sentimos",
      text: `Solo se pueden cargan un maximo de ${MAX_ALLOWED_FILES}. Por favor, intenta nuevamente`,
    });
    return;
  }
  const files = event.target.files; 
  setWebsitePics([...websitePics, ...files]); 
}; 

  const [step, setStep] = useState(1);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

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

  return (
    <div className="mx-3">
    <Form onSubmit={handleSubmit}>
      <div className='d-lg-none'>
        {step === 1 && <StepOneIcon/>}
        {step === 2 && <StepTwoIcon/>}
        {step === 3 && <StepThreeIcon/>}
        {step === 4 && <StepFourIcon/>}
        {step === 5 && <StepFiveIcon/>} 
        {step === 6 && <StepSixIcon/>}
        {step === 7 && <StepSevenIcon/>}
      </div>

      <div className='d-none d-lg-block m-5'>
        <Container>
          <Row className='m-2'>
            <Col><StepOneIcon/></Col>
            <Col><hr className='row-width align-self-center'></hr></Col>
            <Col><StepTwoIcon/></Col>
            <Col><hr className='row-width align-self-center'></hr></Col>
            <Col><StepThreeIcon/></Col>
            <Col><hr className='row-width align-self-center'></hr></Col>
            <Col><StepFourIcon/></Col>
            <Col><hr className='row-width align-self-center'></hr></Col>
            <Col><StepFiveIcon/></Col>
            <Col><hr className='row-width align-self-center'></hr></Col>
            <Col><StepSixIcon/></Col>
            <Col><hr className='row-width align-self-center'></hr></Col>
            <Col><StepSevenIcon/></Col>
          </Row>
        </Container>
      </div>

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
          <ComponentCarousel />
                    
          <div className="container m-0 p-0">
            <div className="row">
              <div className='col-12 col-md-6 col-lg-4 mt-3'> 
                {websitePics?.length < MAX_ALLOWED_FILES &&
                <FormFile fileType='image/*' controlId="form-3" multiple={true} onChange={handleWebsitePicsChange} />
                }
                {websitePics?.length > 0 && ( 
                <div>
                  {websitePics.map(pic => 
                    <img key={pic} className='image-uploaded-container d-block m-auto' src={URL.createObjectURL(pic)} alt="Selected file" /> 
                  )}
                  <ComponentCarousel />
                </div>
                )} 
              </div>
            </div>
          </div>

          <p className='body-text '>{websitePics.length}/{MAX_ALLOWED_FILES}</p> 
        </Form.Group>
      )}

      {step === 4 && (
        <Form.Group controlId="formStep4">
          <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Sube tus productos</Form.Label>
          <small className='body-text d-flex '>Nombre del articulo <p className='asterisk'> *</p></small> 
          <InputGroup className="mb-3">
            <Form.Control className="border-input-text rounded-5" aria-label="Default"/>
          </InputGroup>
          <small className='body-text d-flex'>Agrega una descripcion del articulo <p className='asterisk'> *</p></small> 
          <textarea className="border-input-text form-control mb-3" placeholder='Agrega una descripcion del articulo' aria-label="With textarea"></textarea>
          <div className="container m-0 p-0">
            <div className="row">
              <div className="col-12 col-md-8">
                <small className='body-text d-flex'>Fotos del articulo <p className='asterisk'> *</p></small> 
                {websitePics ? <img src={websitePics}/> :<FormFile controlId="form-4" multiple={false}/>}
              </div>
              <div className="col-12 col-md-4">
                <small className='body-text d-flex'>Cantidad en inventario <p className='asterisk'> *</p></small> 
                <InputGroup className="mb-3">
                  <Form.Control className="border-input-text rounded-5" aria-label="Default"/>
                </InputGroup>
                <small className='body-text d-flex '>Precio del articulo <p className='asterisk'> *</p></small> 
                <InputGroup className="mb-3">
                  <Form.Control className="border-input-text rounded-5" placeholder='$' aria-label="Default"/>
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
          <Button className='handle-buttons next-button mt-2 mx-md-2' variant="custom" onClick={handleNext}>
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