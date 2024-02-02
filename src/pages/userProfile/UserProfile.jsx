import "./styles.scss";
import ButtonAction from "../../components/buttonAction";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormFile from "../../components/FormFile";
import ValidationCircle from "../../components/ValidationCircle";

const UserProfile = () => {

  const {
    register: registerProfilePicture,
    handleSubmit: handleSubmitProfilePicture,
    formState: { errors: errorsProfilePicture },
  } = useForm();

  const {
    register: registerPersonalInfo,
    handleSubmit: handleSubmitPersonalInfo,
    formState: { errors: errorsPersonalInfo },
  } = useForm();

  
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    watch,
    formState: { errors: errorsPassword },
  } = useForm();
  const [profilePicture, setProfilePicture] = useState(null);
  const [errorProfilePictureState, setErrorProfilePicture] = useState("");

  const handleProfilePicture = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const onSubmitPersonalInfo = (data) => {
    console.log(data);
    // Add logic to handle form submission
  };
  const onSubmitImageProfile = (data) => {
    if(!profilePicture) {
      setErrorProfilePicture("Debe de seleccionar una imagen de perfil");
    } else {
      setErrorProfilePicture("");
      console.log(profilePicture);
    }
  }

  const onSubmitPassword = (data) => {
    console.log(data);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="mr-3">
          <div className="d-lg-flex">
            <form className="col-lg-6" onSubmit={handleSubmitProfilePicture((data) => onSubmitImageProfile(data))}>
              <div className="d-flex justify-content-center photo mr-3 mt-5 mt-lg-2">
              {!profilePicture ? (
                      <div className="col-12">
                        <FormFile
                          fileType="image/*"
                          controlId="form-1"
                          // multiple={true}
                          onChange={handleProfilePicture}
                        />
                      </div>
                    ) : (
                      <img
                        className="profile-picture__craftsman img-thumbnail"
                        src={URL.createObjectURL(profilePicture)}
                        alt="Profile Picture"
                      />
                    )}
              </div>
              {errorProfilePictureState && (
                <p className="m-0 text-danger text-center">{errorProfilePictureState}</p>
              )}
              <div className="d-flex justify-content-md-center">
                <ButtonAction
                  buttonClass="button-primary font-size-small mt-4 mt-xl-1"
                  text="Cambiar foto perfil"
                  type="submit"
                />
                {profilePicture && (
                  <ButtonAction
                    buttonClass="button-secondary font-size-small mt-4 mt-xl-1 ms-3"
                    text="Eliminar"
                    type="button"
                    action={() => setProfilePicture(null)}
                  />
                )}
              </div>
            </form>
            <form className="col-lg-6" onSubmit={handleSubmitPersonalInfo((data) => onSubmitPersonalInfo(data))}>
              <div className="form-group mt-2 mt-xl-4">
                <h4><b>Datos Personales</b> </h4>
                <label htmlFor="name">Nombre(s)</label>
                <input
                  type="text"
                  className="form-control primary_input shadow-none mt-1"
                  name="name"
                  id="name"
                  {...registerPersonalInfo("name", {
                    required: {
                      value: true,
                      message: "El campo es obligatorio",
                    },
                  })}
                />
                {errorsPersonalInfo.name && (
                  <p className="text-danger m-0">{errorsPersonalInfo.name.message}</p>
                )}
              </div>
              <div className="mt-2">
                <label htmlFor="surname">Apellido(s)</label>
                <input
                  type="text"
                  className="form-control primary_input shadow-none mt-1"
                  name="surname"
                  id="surname"
                  {...registerPersonalInfo("surname", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
                {errorsPersonalInfo.surname && (
                  <p className="text-danger m-0">{errorsPersonalInfo.surname.message}</p>
                )}
              </div>
              <div className="mt-2">
                <label htmlFor="phone">Teléfono</label>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control primary_input shadow-none mt-1"
                    name="phone"
                    id="phone"
                    {...registerPersonalInfo("phone", {
                      required: {
                        value: true,
                        message: "El campo es obligatorio",
                      },
                      minLength: {
                        value: 10,
                        message: "El teléfono debe tener 10 dígitos",
                      },
                      maxLength: {
                        value: 10,
                        message: "El teléfono debe tener 10 dígitos",
                      },
                    })}
                  />
                </div>
                {errorsPersonalInfo.phone && (
                  <p className="text-danger m-0">{errorsPersonalInfo.phone.message}</p>
                )}
              </div>
              <div className="d-flex justify-content-md-end gap-2 mb-lg-3">
                <ButtonAction
                  buttonClass="button-primary font-size-small mt-3"
                  text="Editar datos personales"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>


        <div className="d-flex justify-content-center">
        <form className="col-12" onSubmit={handleSubmitPassword((data) => onSubmitPassword(data))}>
              <div className="form-group mt-2 mt-xl-4">
                <h4><b>Seguridad</b></h4>
                <label htmlFor="oldPassword">Contraseña</label>
                <input
                  type="password"
                  className="form-control primary_input shadow-none mt-1"
                  name="oldPassword"
                  id="oldPassword"
                  {...registerPassword("oldPassword", {
                    required: {
                      value: true,
                      message: "El campo es obligatorio",
                    },
                  })}
                />
                {errorsPassword.oldPassword && (
                  <p className="text-danger m-0">{errorsPassword.oldPassword.message}</p>
                )}
              </div>
              <div className="mt-2">
                <label htmlFor="password">Nueva contraseña</label>
                <input
                  type="password"
                  className="form-control primary_input shadow-none mt-1"
                  name="password"
                  id="password"
                  {...registerPassword("password", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    minLength: {value: 8, message: "Por lo menos 8 caracteres"},
                    pattern: [{value: /[A-Z]/, message: "Por lo menos 1 mayuscula"}, {value: /[a-z]/, message: "Por lo menos 1 minuscula"}, {value: /[@#$%^&+=*.\-_!¡]/, message: "Por lo menos 1 carácter especial"}]
                  })}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="repeatPassword">Confirmar nueva contraseña</label>
                <div className="d-flex">
                  <input
                    type="password"
                    className="form-control primary_input shadow-none mt-1"
                    name="repeatPassword"
                    id="repeatPassword"
                    {...registerPassword("repeatPassword", {
                      required: {
                        value: true,
                        message: "El campo es obligatorio",
                      }
                    })}
                  />
                </div>
                <div className="validator-container d-flex flex-column justify-content-center mt-3">
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
              </div>
              <div className="d-flex justify-content-md-end gap-2 mb-lg-5">
                <ButtonAction
                  buttonClass="button-primary font-size-small mt-3"
                  text="Actualizar contraseña"
                  type="submit"
                />
              </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;




