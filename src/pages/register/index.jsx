import "./styles.scss";
import ButtonAction from "../../components/buttonAction";
import ValidationCircle from "../../components/ValidationCircle";
import loginImage from "../../../public/images/login-image.png"
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="container my-5">
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
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input custom-control-input"
                    type="radio"
                    name="clientType"
                    id="clientType"
                    value="Cliente"
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
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input custom-control-input"
                    type="radio"
                    name="clientType"
                    id="clientType"
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
                {errors.clientType && (
                  <p className="font-weight-bold m-0">{errors.clientType.message}</p>
                )}
              </div>
              <div className="form-container">
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-container__input"
                    id="email"
                    placeholder="email"
                  />
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
                  />
                </div>
              </div>
              <div className="validator-container d-flex flex-column justify-content-center">
                <div className="validator-value mb-2">
                <ValidationCircle Color="#e91e63"></ValidationCircle>
                  <span>Minimo 8 caracteres</span>
                </div>
                <div className="validator-value mb-2">
                <ValidationCircle Color="#D9D9D9"></ValidationCircle>
                  <span>Por lo menos 1 mayuscula</span>
                </div>
                <div className="validator-value mb-2">
                <ValidationCircle Color="#D9D9D9"></ValidationCircle>
                  <span>Por lo menos 1 minuscula</span>
                </div>
                <div className="validator-value mb-2">
                <ValidationCircle Color="#D9D9D9"></ValidationCircle>
                  <span>Por lo menos 1 caracter especial</span>
                </div>
                <div className="validator-value mb-2">
                <ValidationCircle Color="#D9D9D9"></ValidationCircle>
                  <span>Las contraseñas no son iguales</span>
                </div>
              </div>
              <div className="d-flex flex-column">
              <span>Ya tengo una cuenta? <b className="text_primary">Iniciar sesión</b></span>
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
