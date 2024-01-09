import "./styles.css";
import ButtonAction from "../../components/buttonAction";
import ValidationCircle from "../../components/ValidationCircle";
import loginImage from "/images/login-image.png"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode: "onChange"});
  return (
    <>
      <div className="container my-5 register-container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="text-center">
              <h1 className="title-login title-colorSecondary">Crea tu cuenta</h1>
              <h3 className="description description-colorSecondary">
                Selecciona el tipo de usuario
              </h3>
            </div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className="d-flex justify-content-center">
                <div className="form-check form-check-inline custom-control-input">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="clientType"
                    id="clientType1"
                    value="Cliente"
                    checked
                    {...register("clientType", {
                      required: {value: true, message: "El campo es requerido"}
                    })}
                  />
                  <label
                    className="form-check-label custom-control-label"
                    htmlFor="clientType"
                  >
                    Cliente
                  </label>
                </div>
                <div className="form-check form-check-inline custom-control-input">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="clientType"
                    id="clientType2"
                    value="Artesano"
                    {...register("clientType", {
                      required: {value: true, message: "El campo es requerido"}
                    })}
                  />
                  <label
                    className="form-check-label custom-control-label"
                    htmlFor="inlineRadio2"
                  >
                    Artesano
                  </label>
                </div>
              </div>
              {errors.clientType && (
                <div className="text-center">
                   <p className="font-weight-bold m-0 text-danger">{errors.clientType.message}</p>
                </div>
                )}
              <div className="form-container">
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control form-container__input"
                    id="email"
                    placeholder="email"
                    name="email"
                    {...register("email", {
                      required: {value: true, message: "El campo es requerido"},
                      pattern: {value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, message: "Formato invalido, ingrese un email valido"}
                    })}
                  />
                  {errors.email && (
                  <p className="font-weight-bold m-0 text-danger">{errors.email.message}</p>
                )}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-container__input"
                    id="password"
                    placeholder="Contraseña"
                    name="password"
                    autoComplete="on"
                    {...register("password", {
                      required: {value: true, message: "El campo es requerido"},
                      minLength: {value: 8, message: "Por lo menos 8 caracteres"},
                      pattern: [{value: /[A-Z]/, message: "Por lo menos 1 mayuscula"}, {value: /[a-z]/, message: "Por lo menos 1 minuscula"}, {value: /[@#$%^&+=*.\-_!¡]/, message: "Por lo menos 1 carácter especial"}]
                    })}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="repeatPassword" className="form-label">
                    Repita la contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-container__input"
                    id="repeatPassword"
                    placeholder="Repita la contraseña"
                    name="repeatPassword"
                    autoComplete="on"
                    {...register("repeatPassword", {
                      required: { value: true, message: "El campo es requerido" },
                      validate: value => value === watch("password") || "Las contraseñas no son iguales"
                    })}
                  />
                </div>
              </div>
               <div className="validator-container d-flex flex-column justify-content-center">
                  <div className="validator-value mb-2">
                  <ValidationCircle Color={watch("password") && watch("password").length >= 8 ? "#E91E63": "#D9D9D9"}></ValidationCircle>
                    <span>Minimo 8 caracteres</span>
                  </div>
                  <div className="validator-value mb-2">
                  <ValidationCircle Color={watch("password") && /[A-Z]/.test(watch("password")) ? "#E91E63": "#D9D9D9"}></ValidationCircle>
                    <span>Por lo menos 1 mayuscula</span>
                  </div>
                  <div className="validator-value mb-2">
                  <ValidationCircle Color={watch("password") && /[a-z]/.test(watch("password")) ? "#E91E63": "#D9D9D9"}></ValidationCircle>
                    <span>Por lo menos 1 minuscula</span>
                  </div>
                  <div className="validator-value mb-2">
                  <ValidationCircle Color={watch("password") && /[@#$%^&+=*.\-_!¡]/.test(watch("password")) ? "#E91E63": "#D9D9D9"}></ValidationCircle>
                    <span>Por lo menos 1 caracter especial</span>
                  </div>
                  <div className="validator-value mb-2">
                  <ValidationCircle Color={watch("password") === watch("repeatPassword") ? "#E91E63": "#D9D9D9"}></ValidationCircle>
                    <span>Las contraseñas son iguales</span>
                  </div>
                </div>
              <div className="d-flex flex-column">
              <span>Ya tengo una cuenta? <Link className="text_primary" to="/login">Iniciar sesión</Link></span>
              <ButtonAction buttonClass="button-primary mt-3" text="Registrarse"></ButtonAction>
              </div>
            </form>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <img src={loginImage} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
