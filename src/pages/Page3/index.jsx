import { Form } from "react-bootstrap";
import FormFile from "../../components/FormFile";
import ComponentCarousel from "../../components/Carousel";
import { useState } from "react";
import Swal from 'sweetalert2';
import Stepper from "../../components/Stepper";
import "../../components/Stepper/stepper.css";
import { useForm } from "react-hook-form";

const MAX_ALLOWED_FILES_WEBSITE = 6;
const CURRENT_PAGE = 3;

const Page3 = () => {
  const [profilePic, setProfilePic] = useState(null);
  const handleProfilePicChange = (event) => { 
  const file = event.target.files[0]; 
  setProfilePic(file); 
}; 

const handleDeleteProfilePic = () => {
  setProfilePic(null);
}

const [banner, setBanner] = useState(null);
const handleBannerChange = (event) => { 
  const file = event.target.files[0]; 
  setBanner(file); 
}; 

const handleDeleteBanner = () => {
  setBanner(null);
}

const [websitePics, setWebsitePics] = useState([]);
const handleWebsitePicsChange = (event) => { 
  const files = event.target.files; 
  const newFiles = [...files].filter(file => !websitePics.some(pic => pic.name === file.name && pic.size === file.size))
  const eventFilesLength = newFiles?.length;
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
  setWebsitePics([...websitePics, ...newFiles]); 
}; 

const handleDeleteSelectedFile = (pic) => {
  const newArray = websitePics.filter(websitePic => !websitePic.name.includes(pic.name))
  setWebsitePics(newArray)
}

const [craftsmanImages, setCraftsmanImages] = useState();
const onSubmit = (data) => {
  setCraftsmanImages([...craftsmanImages, data]);
};

const {
  register,
  handleSubmit,
  formState: { errors },
  } 
  = useForm();

    return (
    <div className='container'>
        <Stepper step={CURRENT_PAGE}/>

        <form onSubmit={handleSubmit(onSubmit)}  className='mx-2' id="formStep3">
          <Form.Label className='subtitle-text mt-2 d-flex justify-content-center'>Sube tus fotos</Form.Label>
          <div className="container m-0 p-0">
            <div className="row">
              <div className="col-12 col-lg-5">
                <small className='body-text d-flex '>Foto de perfil <p className='asterisk'> *</p></small> 
                <div className='formfile-uploader-container'> 
                  {profilePic  == null ?
                  <>
                    <FormFile 
                      {...register("profilePic", {
                        required: true,
                      })}
                      fileType='image/*' 
                      controlId="form-1" 
                      onChange={handleProfilePicChange} 
                    />
                    {errors.profilePic?.type === "required" && (
                      <p className="error-message-custom text-danger">
                        * Campo requerido
                      </p>
                    )}
                  </>
                  : ( 
                  <div className='d-inline-block position-relative '> 
                    <img className='image-uploaded-container d-block m-auto justify-content-center' src={URL.createObjectURL(profilePic)} alt="Selected file" /> 
                    <i className='close-icon-custom fa fa-trash-o position-absolute top-0 end-0 m-1' onClick={handleDeleteProfilePic}></i>
                  </div>
                  )} 
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <small className='body-text d-flex '>Foto de portada <p className='asterisk'> *</p></small> 
                <div> 
                  {banner  == null ?
                    <>
                    <FormFile 
                      {...register("bannerImage", {
                        required: true,
                      })}
                      fileType='image/*' 
                      controlId="form-2" 
                      onChange={handleBannerChange} 
                    />
                    {errors.bannerImage?.type === "required" && (
                      <p className="error-message-custom text-danger">
                        * Campo requerido
                      </p>
                    )}
                    </>
                  : ( 
                  <div className='d-inline-block position-relative '> 
                    <img className='image-uploaded-container d-block m-auto d-inline-block position-relative' src={URL.createObjectURL(banner)} alt="Selected file" /> 
                    <i className='close-icon-custom fa fa-trash-o position-absolute top-0 end-0 m-1' onClick={handleDeleteBanner}></i>
                  </div>
                  )} 
                </div>
              </div>
            </div>
          </div>
          <p className='body-text'>Fotos de tu tienda o artesanias</p>                     
          <div className="container m-0 p-0">
            <div className="container">
            <div className="row">
              {websitePics?.length > 0 && 
                <div className="col-md-6 col-lg-8 d-flex justify-content-center justify-content-lg-start mb-3">
                  <ComponentCarousel 
                  files={websitePics}/> 
                </div>
              }
              <div className="col-md-6 col-lg-4 p-0">
                {websitePics?.length < MAX_ALLOWED_FILES_WEBSITE && (
                  <>
                    <FormFile
                   
                    fileType="image/*"
                    controlId="form-3"
                    multiple={true}
                    onChange={handleWebsitePicsChange}
                    />
                    
                  </>
                )}
              </div>
                    
              {websitePics.map((pic) => (
                  <div key={`${pic} ${pic.lastModified}`} className="col-sm-6 col-md-4 col-lg-3 image-uploaded-container d-flex justify-content-center d-inline-block position-relative mb-3 m-auto">
                      <img
                          key={pic}
                          className="image-uploaded-container mb-2"
                          src={URL.createObjectURL(pic)}
                          alt="Selected file"
                      />
                    <i className='close-icon-custom fa fa-trash-o position-absolute top-0 end-0 m-2' onClick={() => handleDeleteSelectedFile(pic)}></i>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex d-md-inline justify-content-center mt-4">
          <button type="submit" className="add-show-product rounded-5 mb-1">
            Siguiente 
          </button>
        </div>
          {/* <div className="text-center mt-4">
            <ButtonAction
              buttonClass="button-primary"
              text="Siguiente"
            ></ButtonAction> */}
          {/* </div> */}
        </form>
        <div className="d-flex d-md-inline justify-content-center mx-2">
          <button className="add-show-product rounded-5 m-auto">
            Atras
          </button>
        </div>
    </div>  
    )}
export default Page3