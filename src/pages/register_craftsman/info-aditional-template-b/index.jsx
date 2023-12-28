import { Row, Col } from "reactstrap";
import FormFile from "../../../components/FormFile";
import "./styles/styles.css"
import React, { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import Stepper from "../../../components/Stepper";
import ButtonAction from "../../../components/buttonAction";
const AditionalTemplateB = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });
  const onSubmit = (data) => console.log(data);
  const [profilePic, setProfilePic] = useState(null);
  const [imagesecondary, setImagesecondary] = useState(null);
  const [imagetree, setImagetree] = useState(null);
  const [imagefor, setImagefor] = useState(null);
  const handleImageOne = (event) => {
    const file2 = event.target.files[0];
    setImagesecondary(file2)
  }
  const handleImageTree = (event) => {
    const file3 = event.target.files[0];
    setImagetree(file3)
  }
  const handleImageFor = (event) => {
    const file4 = event.target.files[0];
    setImagefor(file4)
  }

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(file);
  };
  return (

    <div className="container">
      <Stepper step="6"></Stepper>
      <h2 className="text-center">Agrega mas fotos sobre   tu sitio </h2>
      <p className="text-center">Queremos que nuestros usuarios conozcan mas sobre ti, llena la siguiente informacion para que te conozcan:</p>
      <p className="fw-semibold">Sube un video a tu sitio</p>
      <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col className=" col-12 col-lg-7">
            <div className='formfile-uploader-container '>
              {profilePic == null ?
                <FormFile fileType='video/*' controlId="form-1" onChange={handleProfilePicChange} />
                : (
                  <img className='image-uploaded-container d-block m-auto justify-content-center' src={URL.createObjectURL(profilePic)} alt="Selected file" />
                )}
            </div>
            <p className="text_f fw-semibold">Maximo 30 segundos o 30 MB</p>
          </Col>
          <Col className="pt-lg-5 mt-lg-5">
            <label for="exampleEmail">
              O inserta tu URL
            </label>
            <br />
            <input
              id="urlimage"
              name="url"
              placeholder="www.sitio.com"
              type="text"
              className="w-100 rounded-pill"
            />

          </Col>
        </Row>
        <p className="fw-semibold">Agrega hasta tres secciones</p>
        <Row xs="1" lg="3">
          <Col className="grid gap-3">
            <label htmlFor="">Titulo</label>
            <input id="title"
              name="title"
              placeholder="Titulo"
              type="text"
              className="w-100 rounded-pill"
              {...register("title", {
                required: "El campo es obligatorio."
              })}
            />
            <ErrorMessage
              errors={errors}
              name="title"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p className="alert" key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <label htmlFor="">Descripción</label>
            <input id="description"
              name="description"
              placeholder="Descripción de tu imagen"
              type="text"
              className="input_descroption rounded-4 w-100"
              {...register("description", {
                required: "El campo es obligatorio."
              })}
            />
            <ErrorMessage
              errors={errors}
              name="description"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p className="alert" key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <label htmlFor="">Imagen</label>
            <div className='formfile-uploader-container'>
              {imagesecondary == null ?
                <FormFile fileType='image/*' controlId="form-2" onChange={handleImageOne} />
                : (
                  <img className='image-uploaded-container d-block m-auto justify-content-center' src={URL.createObjectURL(imagesecondary)} alt="Selected file" />
                )}
            </div>
          </Col>
          <Col className="grid gap-3">
            <label htmlFor="">Titulo</label>
            <input id="title2"
              name="title2"
              placeholder="Titulo"
              type="text"
              className="w-100 rounded-pill"
              {...register("title2", {
                required: "El campo es obligatorio."
              })}
            />
            <ErrorMessage
              errors={errors}
              name="title2"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p className="alert" key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <label htmlFor="">Descripción</label>
            <input id="description2"
              name="description2"
              placeholder="Descripción de tu imagen"
              type="text"
              className="input_descroption rounded-4 w-100"
              {...register("description2", {
                required: "El campo es obligatorio."
              })}
            />
            <ErrorMessage
              errors={errors}
              name="description2"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p className="alert" key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <label htmlFor="">Imagen</label>
            <div className='formfile-uploader-container'>
              {imagetree == null ?
                <FormFile fileType='image/*' controlId="form-3" onChange={handleImageTree} />
                : (
                  <img className='image-uploaded-container d-block m-auto justify-content-center' src={URL.createObjectURL(imagetree)} alt="Selected file" />
                )}
            </div>
          </Col>
          <Col className="grid gap-3">
            <label htmlFor="">Titulo</label>
            <input id="title3"
              name="title3"
              placeholder="Titulo"
              type="text"
              className="w-100 rounded-pill"
              {...register("title3", {
                required: "El campo es obligatorio."
              })}
            />
            <ErrorMessage
              errors={errors}
              name="title3"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p className="alert" key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <label htmlFor="">Descripción</label>
            <input id="description3"
              name="description3"
              placeholder="Descripción de tu imagen"
              type="text"
              className="input_descroption rounded-4 w-100"
              {...register("description3", {
                required: "El campo es obligatorio."
              })}
            />
            <ErrorMessage
              errors={errors}
              name="description3"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p className="alert" key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <label htmlFor="">Imagen</label>
            <div className='formfile-uploader-container'>
              {imagefor == null ?
                <FormFile fileType='image/*' controlId="form-4" onChange={handleImageFor} />
                : (
                  <img className='image-uploaded-container d-block m-auto justify-content-center' src={URL.createObjectURL(imagefor)} alt="Selected file" />
                )}
            </div>
          </Col>
        </Row>
      </form>
      </div>
      <div className="container text-center">
        <ButtonAction
          buttonClass="button-secondary m-3"
          text="Atras" type="submit"></ButtonAction>
        <ButtonAction
          buttonClass="button-primary m-3"
          text="Siguiente"></ButtonAction>
      </div>
    </div>

  )
}

export default AditionalTemplateB;