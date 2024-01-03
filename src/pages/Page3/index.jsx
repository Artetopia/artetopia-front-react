import { Form } from "react-bootstrap";
import FormFile from "../../components/FormFile";
import ComponentCarousel from "../../components/Carousel";
import { useState } from "react";
import Swal from 'sweetalert2';
import Stepper from "../../components/Stepper";
import "../../components/Stepper/stepper.css";

const MAX_ALLOWED_FILES_WEBSITE = 6;
const CURRENT_PAGE = 3;

const Page3 = () => {
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

    return (
    <div className='container'>
        <Stepper step={CURRENT_PAGE}/>

        <Form.Group className='mx-2' controlId="formStep3">
          <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Sube tus fotos</Form.Label>
          <div className="container m-0 p-0">
            <div className="row">
              <div className="col-12 col-lg-5">
                <small className='body-text d-flex '>Foto de perfil <p className='asterisk'> *</p></small> 
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

            {/* <div className='container mt-3'> 
                {websitePics?.length > 0 && websitePics?.length <= MAX_ALLOWED_FILES_WEBSITE && ( 
                <div className='row'>
                    {websitePics.map(pic => 
                        <img key={pic} className='col-12 col-md-4 image-uploaded-container d-flex justify-content-center my-1' src={URL.createObjectURL(pic)} alt="Selected file" /> 
                    )}
                </div>
                )} 
            </div> */}
            <div className="container">
            <div className="row">
              {websitePics?.length > 0 && 
                <div className="col-md-6 col-lg-8 d-flex justify-content-center ">
                  <ComponentCarousel 
                  files={websitePics}/> 
                </div>
              }
              <div className="col-md-6 col-lg-4 p-0">
                {websitePics?.length < MAX_ALLOWED_FILES_WEBSITE && (
                    <FormFile
                    fileType="image/*"
                    controlId="form-3"
                    multiple={true}
                    onChange={handleWebsitePicsChange}
                    />
                )}
              </div>
                    
              {websitePics.map((pic) => (
                  <div className="col-md-4 col-lg-3 d-flex justify-content-center ">
                      <img
                          key={pic}
                          className="image-uploaded-container "
                          src={URL.createObjectURL(pic)}
                          alt="Selected file"
                      />
                  </div>
              ))}
            </div>
          </div>
        </div>
        </Form.Group>
    </div>  
    )}
export default Page3