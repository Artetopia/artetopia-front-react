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
      
      <div className='circle-step rounded-circle d-lg-none m-2 mb-4'>
        {step === 1 && 
          <div>
            <svg className='progress-icon-svg d-flex justify-content-center align-items-center m-1 m-md-2' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <p className='progress-bar-text'>Información personal</p>
          </div>
        }
        {step === 2 && 
          <div>
            <svg className='progress-icon-svg d-flex justify-content-center align-items-center m-1 m-md-2' width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#E91E63"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"></path> </g></svg>
            <p className='progress-bar-text'>Información de tu sitio</p>
          </div>
        }
        {step === 3 && 
          <div>
            <svg className='image-icon-svg d-flex justify-content-center align-items-center m-1 m-md-2' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <small className='progress-bar-text'>Sube tus fotos</small>
          </div>
        }
        {step === 4 && 
          <div>
            <svg className='image-icon-svg d-flex justify-content-center align-items-center m-1 m-md-2' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5 21H18.6688C19.8945 21 20.8319 19.9074 20.6455 18.6959L19.2609 9.69589C19.1108 8.72022 18.2713 8 17.2842 8H6.71584C5.7287 8 4.8892 8.72022 4.73909 9.69589L3.35448 18.6959C3.16809 19.9074 4.10545 21 5.33122 21H7.5" stroke="#E91E63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 19V12M12 12L15 15M12 12L9 15" stroke="#E91E63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5" stroke="#E91E63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>            
            <small className='progress-bar-text'>Sube tus productos</small>
          </div>
        }
        {step === 5 && 
          <div>
            <svg className='image-icon-svg d-flex justify-content-center align-items-center m-1 m-md-2' fill="#E91E63" width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M17.5 15c-.797 0-1.456.314-1.88.793-.424.48-.62 1.098-.62 1.707 0 .78-.568 1.418-.81 1.607-.372.294-.165.892.31.893H17c.786 0 1.517-.23 2.072-.662.555-.432.928-1.09.928-1.838 0-.683-.193-1.32-.63-1.785C18.93 15.25 18.273 15 17.5 15zm0 1c.57 0 .914.16 1.14.4.227.24.36.602.36 1.1 0 .432-.19.776-.54 1.05-.353.272-.872.45-1.46.45h-1.423c.237-.4.422-.9.422-1.5 0-.39.13-.772.368-1.043.24-.27.583-.457 1.132-.457zM29.284 5.01c-.126.015-.233.048-.352.09-.238.08-.513.21-.838.374-.65.33-1.477.813-2.35 1.365-1.75 1.103-3.66 2.457-4.642 3.438-.935.934-1.616 1.784-1.936 2.637-.32.852-.186 1.777.478 2.44.665.665 1.59.8 2.442.48.853-.32 1.703-1.002 2.637-1.936.98-.983 2.335-2.893 3.44-4.64.552-.876 1.035-1.704 1.365-2.353.165-.324.293-.6.375-.838.04-.12.072-.226.086-.352.013-.126.047-.327-.167-.54-.214-.215-.413-.18-.54-.167zm-.647 1.444c-.307.603-.78 1.416-1.32 2.27-1.08 1.713-2.46 3.628-3.3 4.468-.888.887-1.678 1.48-2.283 1.707-.604.225-.954.177-1.383-.25-.427-.43-.475-.78-.25-1.384.228-.604.82-1.394 1.71-2.28.84-.84 2.754-2.22 4.466-3.3.856-.542 1.668-1.015 2.272-1.322.134-.036.13.022.09.09zM2.5 8h17c.277 0 .5.223.5.5s-.223.5-.5.5h-17c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zM7 6.5c0 .276-.224.5-.5.5S6 6.776 6 6.5s.224-.5.5-.5.5.224.5.5zm-2 0c0 .276-.224.5-.5.5S4 6.776 4 6.5s.224-.5.5-.5.5.224.5.5zm-2 0c0 .276-.224.5-.5.5S2 6.776 2 6.5s.224-.5.5-.5.5.224.5.5zM1.5 4C.678 4 0 4.678 0 5.5v19c0 .822.678 1.5 1.5 1.5h25c.822 0 1.5-.678 1.5-1.5v-12c0-.668-1-.665-1 0v12c0 .286-.214.5-.5.5h-25c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5h25c.665 0 .657-1 0-1z"></path></g></svg>
            <small className='progress-bar-text'>Elige una plantilla</small>
          </div>
        } 
        {step === 6 && 
          <div>
            <svg className='image-icon-svg d-flex justify-content-center align-items-center m-1 m-md-2' width="30 px" height="30 px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z" fill="#E91E63"></path> <path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" fill="#E91E63"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="#E91E63"></path> </g></svg>
            <small className='progress-bar-text'>Información adicional</small>
          </div>
        } 
        {step === 7 && 
          <div>
            <svg className='image-icon-svg d-flex justify-content-center align-items-center m-1 m-md-2' width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="4.5" y="6.5" width="15" height="11" rx="1.5" stroke="#E91E63"></rect> <path d="M19.5 9.5H4.5" stroke="#E91E63"></path> <path d="M11.5 12.5H7.5" stroke="#E91E63" strokeLinecap="round"></path> <path d="M10.5 14.5H7.5" stroke="#E91E63" strokeLinecap="round"></path> </g></svg>
            <small className='progress-bar-text'>Pagos</small>
          </div>
        } 

      </div>

      

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