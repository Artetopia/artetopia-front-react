import {Row, Col } from "reactstrap";
import FormFileA from "../../../components/FormFileAditional/FormFile";
import "./styles/styles.css"
import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
const AditionalTemplateB = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });
  const onSubmit = (data) => console.log(data);
  return (

    <div className="container">
      <h2 className="text-center">Agrega mas fotos sobre   tu sitio </h2>
      <p className="text-center">Queremos que nuestros usuarios conozcan mas sobre ti, llena la siguiente informacion para que te conozcan:</p>
      <p className="fw-semibold">Sube un video a tu sitio</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col className=" col-12 col-lg-7">
            <FormFileA></FormFileA>
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
            <FormFileA></FormFileA>
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
            <FormFileA></FormFileA>
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
            <FormFileA></FormFileA>
          </Col>
        </Row>
        <input type="submit" />
      </form>
    </div>

  )
}

export default AditionalTemplateB;