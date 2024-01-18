import "./styles.scss";
import ButtonAction from "../../components/buttonAction";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormFile from "../../components/FormFile";

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePicture = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Add logic to handle form submission
  };

  return (
    <div className="container">
      <div className="row">
        <div className="p-4 px-md-5 m-md-5">
          <div className="d-lg-flex">
            <form className="col-lg-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex justify-content-center p-xl-3 photo">
                {!profilePicture ? (
                  <div className="col-12">
                    <FormFile
                      className="profile-pic-size"
                      fileType="image/*"
                      controlId="form-3"
                      onChange={handleProfilePicture}
                    />
                  </div>
                ) : (
                  <img
                    className="profile-picture__craftsman img-thumbnail"
                    src={URL.createObjectURL(profilePicture)}
                    alt="Profile"
                  />
                )}
              </div>
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
            <form className="col-lg-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mt-2 mt-xl-4">
                <h4><b>Datos Personales</b> </h4>
                <label htmlFor="name">Nombre(s)</label>
                <input
                  type="text"
                  className="form-control primary_input shadow-none mt-1"
                  name="name"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "El campo es obligatorio",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-danger m-0">{errors.name.message}</p>
                )}
              </div>
              <div className="mt-2">
                <label htmlFor="surname">Apellido(s)</label>
                <input
                  type="text"
                  className="form-control primary_input shadow-none mt-1"
                  name="surname"
                  id="surname"
                  {...register("surname", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
                {errors.surname && (
                  <p className="text-danger m-0">{errors.surname.message}</p>
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
                    {...register("phone", {
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
                {errors.phone && (
                  <p className="text-danger m-0">{errors.phone.message}</p>
                )}
              </div>
              <div className="d-flex justify-content-md-end gap-2 mb-lg-5">
                <ButtonAction
                  buttonClass="button-primary font-size-small mt-5"
                  text="Editar datos personales"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>


        <div className="d-flex justify-content-center">
        <form className="col-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mt-2 mt-xl-4">
                <h4><b>Seguridad</b> </h4>
                <label htmlFor="name">Contraseña</label>
                <input
                  type="password"
                  className="form-control primary_input shadow-none mt-1"
                  name="name"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "El campo es obligatorio",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-danger m-0">{errors.name.message}</p>
                )}
              </div>
              <div className="mt-2">
                <label htmlFor="surname">Nueva contraseña</label>
                <input
                  type="password"
                  className="form-control primary_input shadow-none mt-1"
                  name="surname"
                  id="surname"
                  {...register("surname", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
                {errors.surname && (
                  <p className="text-danger m-0">{errors.surname.message}</p>
                )}
              </div>
              <div className="mt-2">
                <label htmlFor="phone">Confirmar nueva contraseña</label>
                <div className="d-flex">
                  <input
                    type="password"
                    className="form-control primary_input shadow-none mt-1"
                    name="phone"
                    id="phone"
                    {...register("phone", {
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
                {errors.phone && (
                  <p className="text-danger m-0">{errors.phone.message}</p>
                )}
              </div>
              <div className="d-flex justify-content-md-end gap-2 mb-lg-5">
                <ButtonAction
                  buttonClass="button-primary font-size-small mt-5"
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




