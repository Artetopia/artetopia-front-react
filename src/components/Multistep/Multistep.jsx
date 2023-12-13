import React, { useState } from 'react';
import { Form, Button, ProgressBar, Container, Row, Col } from 'react-bootstrap';
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

const MultiStepForm = () => {
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

const [websitePics, setWebsitePics] = useState(null);
const handleWebsitePicsChange = (event) => { 
  // let file=[];
  const file = event.target.files[0]; 
  setWebsitePics(file); 
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

      <ProgressBar className='border-progress-bar d-lg-none rounded-5' label={step} variant="custom" now={(step / 7) * 100} />
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
          <small className='body-text d-flex '>Foto de perfil <p className='asterisk'> *</p></small> 
          {/* {profilePic ? <img src={profilePic}/> :<FormFile/>} */}
          <div> 
            {profilePic  == null ?
            <FormFile fileType='image/*' onChange={handleProfilePicChange} />
            : ( 
            <img className='image-uploaded-container d-block m-auto justify-content-center' src={URL.createObjectURL(profilePic)} alt="Selected file" /> 
            )} 
          </div>
          <small className='body-text d-flex '>Foto de portada <p className='asterisk'> *</p></small> 
          
          <div> 
            {banner  == null ?
            <FormFile fileType='image/*' onChange={handleBannerChange} />
            : ( 
            <img className='image-uploaded-container d-block m-auto' src={URL.createObjectURL(banner)} alt="Selected file" /> 
            )} 
          </div>
          <p className='body-text'>Fotos de tu tienda o artesanias</p> 
          <div className='mt-3'> 
            {websitePics == null ?
            <FormFile fileType='image/*' multiple='multiple' onChange={handleWebsitePicsChange} />
            : ( 
            <div>
              <img className='image-uploaded-container d-block m-auto' src={URL.createObjectURL(websitePics)} alt="Selected file" /> 
              <ComponentCarousel />
            </div>
            )} 
          </div>

          <p className='body-text '>4/6</p> 
        </Form.Group>
      )}

      {step === 4 && (
        <Form.Group controlId="formStep4">
          <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Sube tus productos</Form.Label>
          <small className='body-text d-flex '>Nombre del articulo <p className='asterisk'> *</p></small> 
          <InputGroup className="mb-3">
            <Form.Control className="border-input-text" aria-label="Default"/>
          </InputGroup>
          <small className='body-text d-flex'>Agrega una descripcion del articulo <p className='asterisk'> *</p></small> 
          <textarea className="border-input-text form-control mb-3" placeholder='Agrega una descripcion del articulo' aria-label="With textarea"></textarea>
          <small className='body-text d-flex'>Fotos del articulo <p className='asterisk'> *</p></small> 
          {profilePic ? <img src={profilePic}/> :<FormFile multiple={"multiple"}/>}
          <small className='body-text d-flex '>Cantidad en inventario <p className='asterisk'> *</p></small> 
          <InputGroup className="mb-3">
            <Form.Control className="border-input-text" aria-label="Default"/>
          </InputGroup>
          <small className='body-text d-flex '>Precio del articulo <p className='asterisk'> *</p></small> 
          <InputGroup className="mb-3">
            <Form.Control className="border-input-text" placeholder='$' aria-label="Default"/>
          </InputGroup>
          <Button variant="white" className="add-product mt-3 mb-3">Añadir  este articulo</Button>
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
      
      <div>
        {step < 7 ? (
          <Button className='next-button mt-2' variant="custom" onClick={handleNext}>
            Siguiente
          </Button>)
        
          : (
            <Button className='next-button mt-2' variant="custom" type="submit">
              Siguiente
            </Button>
        ) }
        {step > 1 && (
          <Button className='back-button mt-2 mb-2' variant="white" onClick={handlePrevious}>
            Atras
          </Button>
        )}
      </div>
    </Form>
    </div>
  );
};

export default MultiStepForm;