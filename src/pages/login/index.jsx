import React, { useState } from "react";
import "./styles.css";
import loginImage from "../../../public/assets/login_image.png";
import { Link } from "react-router-dom";
import ButtonAction from "../../components/buttonAction";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
    <div className="container my-5 login__container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-lg-6">
          <h1 className="login__title text-center">Bienvenido</h1>
          <form noValidate onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" className="form-control input_primary" name="email" id="email"   {...register("email", {
                      required: {value: true, message: "El campo es requerido"},
                      pattern: {value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, message: "Formato invalido, ingrese un email valido"}
                    })}/>
              {errors.email && (
                <p className="text-danger m-0">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="">Contraseña</label>
              <input type="text" className="form-control input_primary" {...register("password", {
                required: {value: true, message: "El campo es requerido"}
              })}/>
             {errors.password && (
               <p className="text-danger m-0">{errors.password.message}</p>
             )} 
            </div>
            <div className="d-flex flex-column">
            <span className="mt-2">No tienes cuenta? <Link className="text_primary fw-bold" to="/register">Regístrate</Link></span>
            <ButtonAction text="Iniciar sesión" buttonClass="button-primary mt-3"></ButtonAction>
            </div>
          </form>
        </div>
        <div className="d-none d-lg-block col-lg-6">
            <img src={loginImage} alt="" className="img-fluid login__image"/>
          </div>
      </div>
    </div>
    </>
  );
};

export default LoginForm;
