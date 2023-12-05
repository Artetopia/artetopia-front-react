import React, { useState } from 'react';
import { Form, Button, ProgressBar } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import "./multistep.scss"



const MultiStepForm = () => {
const [profilePic, setProfilePic] = useState();

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
      {step === 1 && 
      
      <div className='circle-step rounded-circle d-lg-none m-2'>
        <svg className='user-icon-svg d-flex justify-content-center align-items-center m-1 m-md-2' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </div>
      }

      {step === 2 && 
      <h1>Paso2</h1>
      }

      <ProgressBar className='border-progress-bar d-lg-none' label={step} variant="custom" now={(step / 7) * 100} />
      {step === 1 && (
        <Form.Group controlId="formStep1">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Informacion personal</Form.Label>
        
{/* (DAVID) *******PAGINA 1******  */}
        
        </Form.Group>
      )}
      {step === 2 && (
        <Form.Group controlId="formStep2">  
          <Form.Label className='subtitle-text d-flex justify-content-center'>Informacion de tu sitio </Form.Label>

{/* (DAVID) *******PAGINA 2******  */}

        </Form.Group>
      )}
      {step === 3 && (
        <Form.Group controlId="formStep3">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Sube tus fotos</Form.Label>
          <small className='body-text d-flex '>Foto de perfil <p className='asterisk'> *</p></small> 
          
          {profilePic ? <img src={profilePic}/> 
          :
          <Form.Group 
            controlId="formFile" 
            className="mb-3">
            <label className="card d-flex justify-content-center border-0 form-label" htmlFor="formFile">
            <div className="file-uploader-container d-flex flex-column justify-content-center align-items-center">
              <svg className="d-flex justify-content-center align-items-center" width="64px" height="64px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#E91E63"></path><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#2B2E4A"></path><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#2B2E4A"></path></g></svg>                
              <p className="body-text upload-file-text d-flex justify-content-center align-items-center">Cargar archivo</p>
              </div>
            </label>
          <Form.Control className='d-none' type="file" />

          <small className='body-text d-flex '>Foto de portada <p className='asterisk'> *</p></small> 
          {profilePic ? <img src={profilePic}/> 
          :
          <Form.Group 
            controlId="formFile" 
            className="mb-3">
            <label className="card d-flex justify-content-center border-0 form-label" htmlFor="formFile">
            <div className="file-uploader-container d-flex flex-column justify-content-center align-items-center">
              <svg className="d-flex justify-content-center align-items-center" width="64px" height="64px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#E91E63"></path><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#2B2E4A"></path><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#2B2E4A"></path></g></svg>                
              <p className="body-text upload-file-text d-flex justify-content-center align-items-center">Cargar archivo</p>
              </div>
            </label>
          <Form.Control className='d-none' type="file" />
          </Form.Group> 
          }
          </Form.Group> 
          }

        </Form.Group>
      )}
      {step === 4 && (
        <Form.Group controlId="formStep4">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Sube tus productos</Form.Label>
          <small className='body-text d-flex '>Nombre del articulo <p className='asterisk'> *</p></small> 
          <InputGroup className="mb-3">
            <Form.Control className="border-input-text" aria-label="Default"/>
          </InputGroup>

          <small className='body-text d-flex '>Agrega una descripcion del articulo <p className='asterisk'> *</p></small> 
          <textarea className="border-input-text form-control mb-3" placeholder='Agrega una descripcion del articulo' aria-label="With textarea"></textarea>
          
          <small className='body-text d-flex '>Fotos del articulo <p className='asterisk'> *</p></small> 
          {profilePic ? <img src={profilePic}/> 
          :
          <Form.Group 
            controlId="formFile" 
            className="mb-3">
            <label className="card d-flex justify-content-center border-0 form-label" htmlFor="formFile">
            <div className="file-uploader-container d-flex flex-column justify-content-center align-items-center">
              <svg className="d-flex justify-content-center align-items-center" width="64px" height="64px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#E91E63"></path><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#2B2E4A"></path><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#2B2E4A"></path></g></svg>                
              <p className="body-text upload-file-text d-flex justify-content-center align-items-center">Cargar archivo</p>
              </div>
            </label>
          <Form.Control className='d-none' type="file" />
          </Form.Group> 
          }

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
          <Form.Label className='subtitle-text d-flex justify-content-center'>Elige una plantilla</Form.Label>

{/* (VICTOR) *******PAGINA 5******  */}

        </Form.Group>
      )}
      {step === 6 && (
        <Form.Group controlId="formStep6">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Informacion adicional</Form.Label>

{/* (GUADALUPE) *******PAGINA 6******  */}

        </Form.Group>
      )}
      {step === 7 && (
        <Form.Group controlId="formStep6">
          <Form.Label className='subtitle-text d-flex justify-content-center'>Pagos</Form.Label>
         
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
  );
};

export default MultiStepForm;