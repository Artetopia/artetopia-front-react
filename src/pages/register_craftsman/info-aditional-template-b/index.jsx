import { Row, Col } from "reactstrap";
import FormFile from "../../../components/FormFile";
import "./styles/styles.css";
import React, { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import Stepper from "../../../components/Stepper";
import ButtonAction from "../../../components/buttonAction";
const AditionalTemplateB = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [profilePic, setProfilePic] = useState(null);
  const [imagesecondary, setImagesecondary] = useState(null);
  const [imagetree, setImagetree] = useState(null);
  const [imagefor, setImagefor] = useState(null);
  const handleImageOne = (event) => {
    const file2 = event.target.files[0];
    setImagesecondary(file2);
  };
  const handleImageTree = (event) => {
    const file3 = event.target.files[0];
    setImagetree(file3);
  };
  const handleImageFor = (event) => {
    const file4 = event.target.files[0];
    setImagefor(file4);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(file);
  };
  return (
    <div className="container">
      <Stepper step={6}></Stepper>
      <h2 className="text-center">Agrega mas fotos sobre tu sitio </h2>
      <p className="text-center">
        Queremos que nuestros usuarios conozcan mas sobre ti, llena la siguiente
        informacion para que te conozcan:
      </p>
      <p className="fw-semibold">Sube un video a tu sitio</p>
      <div className="container">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Row>
            <Col className=" col-12 col-lg-7">
              <div className="formfile-uploader-container">
                {profilePic == null ? (
                  <FormFile
                    fileType="video/*"
                    controlId="form-1"
                    onChange={handleProfilePicChange}
                  />
                ) : (
                  <>
                    <div className="text-end">
                      <button onClick={() => setProfilePic(null)} className="bg-transparent border border-0"><img src="/trash.svg" /></button>
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                      <video
                        className="embed-responsive-item"
                        autoPlay
                        muted
                        controls
                      >
                        <source
                          src={URL.createObjectURL(profilePic)}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </>
                )}
              </div>
              <p className="text_f fw-semibold">Maximo 30 segundos o 30 MB</p>
            </Col>
            <Col className="mt-lg-5">
              <label htmlFor="exampleEmail">O inserta tu URL</label>
              <input
                id="urlimage"
                name="url"
                placeholder="www.sitio.com"
                type="text"
                className="w-100 form-control input__primary"
                {...register("videoUrl", {
                  required: { value: false },
                  pattern: {
                    value:
                      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
                    message: "La dirección url debe de ser de youtube",
                  },
                })}
              />
              {errors.videoUrl && (
                <p className="text-danger m-0">{errors.videoUrl.message}</p>
              )}
            </Col>
          </Row>
          <p className="fw-semibold">Agrega hasta tres secciones</p>
          <Row xs="1" lg="3" className="mt-4">
            <Col className="grid gap-3">
              <label htmlFor="title">Titulo</label>
              <input
                id="title"
                name="title"
                placeholder="Titulo"
                type="text"
                className="w-100 form-control input__primary"
                {...register("title", {
                  required: { value: true, message: "El campo es requerido" },
                })}
              />
              {errors.title && (
                <p className="text-danger m-0">{errors.title.message}</p>
              )}
              <label htmlFor="description">Descripción</label>
              <textarea
                id="description"
                name="description"
                placeholder="Descripción de tu imagen"
                type="text"
                cols={10}
                rows={5}
                className="input__primary form-control w-100"
                {...register("description", {
                  required: { value: true, message: "El campo es obligatorio" },
                })}
              />
              {errors.description && (
                <p className="text-danger m-0">{errors.description.message}</p>
              )}
              <label htmlFor="">Imagen</label>
              <div className="formfile-uploader-container">
                {imagesecondary == null ? (
                  <FormFile
                    fileType="image/*"
                    controlId="form-2"
                    onChange={handleImageOne}
                  />
                ) : (
                  <>
                    <div className="text-end">
                      <button onClick={() => setImagesecondary(null)} className="bg-transparent border border-0"><img src="/trash.svg" /></button>
                    </div>

                    <div>
                      <img
                        className="m-2 d-block justify-content-center w-100"
                        src={URL.createObjectURL(imagesecondary)}
                        alt="Selected file"
                      />
                    </div>
                  </>

                )}
              </div>
            </Col>
            <hr className="border border-danger border-3 my-3  d-block d-lg-none"/>
            <Col className="grid gap-3 section_color">
              <label htmlFor="title2">Titulo</label>
              <input
                id="title2"
                name="title2"
                placeholder="Titulo"
                type="text"
                className="w-100 input__primary form-control"
                {...register("title2", {
                  required: {
                    value: true,
                    message: "El campo es obligatorio.",
                  },
                })}
              />
              {errors.title2 && (
                <p className="text-danger m-0">{errors.title2.message}</p>
              )}
              <label htmlFor="description2">Descripción</label>
              <textarea
                id="description2"
                name="description2"
                placeholder="Descripción de tu imagen"
                type="text"
                cols={10}
                rows={5}
                className="input_descroption input__primary form-control w-100"
                {...register("description2", {
                  required: {
                    value: true,
                    message: "El campo es obligatorio.",
                  },
                })}
              />
              {errors.description2 && (
                <p className="text-danger m-0">{errors.description2.message}</p>
              )}
              <label htmlFor="">Imagen</label>
              <div className="formfile-uploader-container">
                {imagetree == null ? (
                  <FormFile
                    fileType="image/*"
                    controlId="form-3"
                    onChange={handleImageTree}
                  />
                ) : (
                  <>
                    <div className="text-end">
                      <button onClick={() => setImagetree(null)} className="bg-transparent border border-0"><img src="/trash.svg" /></button>
                    </div>

                    <div>
                      <img
                        className="m-2 d-block justify-content-center w-100"
                        src={URL.createObjectURL(imagetree)}
                        alt="Selected file"
                      />
                    </div>
                  </>

                )}
              </div>
            </Col>
            <hr className="border border-danger border-3 my-3  d-block d-lg-none"/>
            <Col className="grid gap-3">
              <label htmlFor="title3">Titulo</label>
              <input
                id="title3"
                name="title3"
                placeholder="Titulo"
                type="text"
                className="w-100 input__primary form-control"
                {...register("title3", {
                  required: {
                    value: true,
                    message: "El campo es obligatorio.",
                  },
                })}
              />
              {errors.title3 && (
                <p className="text-danger m-0">{errors.title3.message}</p>
              )}
              <label htmlFor="description3">Descripción</label>
              <textarea
                id="description3"
                name="description3"
                placeholder="Descripción de tu imagen"
                type="text"
                cols={10}
                rows={5}
                className="input_descroption input__primary form-control w-100"
                {...register("description3", {
                  required: {
                    value: true,
                    message: "El campo es obligatorio.",
                  },
                })}
              />
              {errors.description3 && (
                <p className="text-danger m-0">{errors.description3.message}</p>
              )}
              <label htmlFor="">Imagen</label>
              <div className="formfile-uploader-container">
                {imagefor == null ? (
                  <FormFile
                    fileType="image/*"
                    controlId="form-4"
                    onChange={handleImageFor}
                  />
                ) : (
                  <>
                    <div className="text-end">
                      <button onClick={() => setImagefor(null)} className="bg-transparent border border-0"><img src="/trash.svg" /></button>
                    </div>

                    <div>
                      <img
                        className="m-2 d-block justify-content-center w-100"
                        src={URL.createObjectURL(imagefor)}
                        alt="Selected file"
                      />
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>

          <div className="container text-center">
            <ButtonAction
              buttonClass="button-secondary m-3"
              text="Atras"
              type="button"
            ></ButtonAction>
            <ButtonAction
              buttonClass="button-primary m-3"
              text="Siguiente"
              type="submit"
            ></ButtonAction>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AditionalTemplateB;
