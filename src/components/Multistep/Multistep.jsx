import  { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import "./multistep.scss"

const MultiStepForm = () => {
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
    <Form onSubmit={handleSubmit}>
      <ProgressBar label={step} variant="custom" now={(step / 7) * 100} />
      {step === 1 && (
        <Form.Group controlId="formStep1">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Informacion personal</Form.Label>
        </Form.Group>
      )}
      {step === 2 && (
        <Form.Group controlId="formStep2">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Informacion de tu sitio </Form.Label>
          
        </Form.Group>
      )}
      {step === 3 && (
        <Form.Group controlId="formStep3">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Sube tus fotos</Form.Label>
          <small className='body-text d-flex '>Foto de perfil <p className='asterisk'> *</p></small> 
          <Form.Group controlId="formFile" className="mb-3">
            <div className="d-flex justify-content-center">
              <label className="file-uploader-container d-flex justify-content-center card form-label" htmlFor="formFile">
              <svg className="d-flex justify-content-center" width="64px" height="64px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#E91E63"></path><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#2B2E4A"></path><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#2B2E4A"></path></g></svg>                
              <p className="body-text d-flex justify-content-center upload-file-text">Cargar archivo</p>
              

              </label>

            </div>
          
          <Form.Control className='d-none' type="file" />

          </Form.Group> 
        </Form.Group>
      )}
      {step === 4 && (
        <Form.Group controlId="formStep4">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Sube tus productos</Form.Label>
          
        </Form.Group>
      )}
      {step === 5 && (
        <Form.Group controlId="formStep5">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Elige una plantilla</Form.Label>
          
        </Form.Group>
      )}
      {step === 6 && (
        <Form.Group controlId="formStep6">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Informacion adicional</Form.Label>
          
        </Form.Group>
      )}
      {step === 8 && (
        <h3>hola</h3>
      )}
      <div className="d-flex justify-content-center">
        {step > 1 && (
          <Button variant="custom" onClick={handlePrevious}>
            Atras
          </Button>
        )}
        {step < 7 ? (
          <Button variant="custom" onClick={handleNext}>
            Siguiente
          </Button>
        ) : (
          <Button variant="custom" type="submit">
            Regresar a artetopia
          </Button>
        )}
      </div>
    </Form>
  );
};

export default MultiStepForm;