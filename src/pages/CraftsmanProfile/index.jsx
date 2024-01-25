import "./styles.css";
import ButtonAction from "../../components/buttonAction";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormFile from "../../components/FormFile";
import Select from "react-select";

const CraftsmanProfile = () => {
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

  const [headerPicture, setHeaderPicture] = useState(null);
  const handleHeaderPicture = (event) => {
    const file = event.target.files[0];
    setHeaderPicture(file);
  };

  const [selectedOptions, setSelecteOptions] = useState([]);
  const [errorCategories, setErrorCategories] = useState(false);

  const checkSelectedOptions = () => {
    console.log(selectedOptions);
    selectedOptions.length > 0 && setErrorCategories(false);
  };

  const handleChange = (selected) => {
    setSelecteOptions(selected);
    checkSelectedOptions();
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "50px",
      borderColor: "#000000",
    }),
  };

  const submitCraftsmanInfoSite = (data) => {
    if (selectedOptions.length > 0) {
      console.log(selectedOptions);
      console.log(data);
    } else {
      setErrorCategories(true);
    }
  };

  const noOptionsMessage = ({ inputValue }) =>
    `No se ha encontrado el valor: "${inputValue}"`;

  const options = [
    { value: "bordados", label: "Bordados" },
    { value: "joyería", label: "Joyería" },
    { value: "tejidos", label: "Tejidos" },
    { value: "cuero", label: "Cuero" },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <div className="p-4 px-md-5 m-md-5">
              <div className="row d-lg-flex">
                <form className="col-lg-6">
                  <div className="d-flex justify-content-center p-xl-3">
                    {!profilePicture ? (
                      <div className="col-12">
                        <FormFile
                          fileType="image/*"
                          controlId="form-1"
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
                  <div className="d-flex justify-content-md-center">
                    <ButtonAction
                      buttonClass="button-primary font-size-small mt-4 mt-xl-1"
                      text="Cambiar foto perfil"
                      type="submit"
                    ></ButtonAction>
                    {profilePicture && (
                      <ButtonAction
                        buttonClass="button-secondary font-size-small mt-4 mt-xl-1 ms-3"
                        text="Eliminar"
                        type="button"
                        action={() => setProfilePicture(null)}
                      ></ButtonAction>
                    )}
                  </div>
                </form>
                <form
                  onSubmit={handleSubmit((data) => console.log(data))}
                  className="col-lg-6"
                  action="#"
                >
                  <div className="form-group mt-2 mt-xl-4">
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
                      <p className="text-danger m-0">
                        {errors.surname.message}
                      </p>
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
                            message: "El teléfono debe de contener 10 dígitos",
                          },
                          maxLength: {
                            value: 10,
                            message: "El teléfono debe de contener 10 dígitos",
                          },
                        })}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-danger m-0">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="mt-2">
                    <label htmlFor="city">Estado</label>
                    <select
                      type="text"
                      className="form-select form-select-lg primary_input shadow-none mt-1 craftsman-profile-font-dropdown content-colorSecondary__input"
                      name="state"
                      id="state"
                      {...register("state", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                    >
                      <option value="Aguascalientes">Aguascalientes</option>
                      <option value="Baja California">Baja California</option>
                      <option value="Baja California Sur">
                        Baja California Sur
                      </option>
                      <option value="Campeche">Campeche</option>
                      <option value="Chiapas">Chiapas</option>
                      <option value="Chihuahua">Chihuahua</option>
                      <option value="Ciudad de México">Ciudad de México</option>
                      <option value="Coahuila">Coahuila</option>
                      <option value="Colima">Colima</option>
                      <option value="Durango">Durango</option>
                      <option value="Estado de México">Estado de México</option>
                      <option value="Guanajuato">Guanajuato</option>
                      <option value="Guerrero">Guerrero</option>
                      <option value="Hidalgo">Hidalgo</option>
                      <option value="Jalisco">Jalisco</option>
                      <option value="Michoacán">Michoacán</option>
                      <option value="Morelos">Morelos</option>
                      <option value="Nayarit">Nayarit</option>
                      <option value="Nuevo León">Nuevo León</option>
                      <option value="Oaxaca">Oaxaca</option>
                      <option value="Puebla">Puebla</option>
                      <option value="Querétaro">Querétaro</option>
                      <option value="Quintana Roo">Quintana Roo</option>
                      <option value="San Luis Potosí">San Luis Potosí</option>
                      <option value="Sinaloa">Sinaloa</option>
                      <option value="Sonora">Sonora</option>
                      <option value="Tabasco">Tabasco</option>
                      <option value="Tamaulipas">Tamaulipas</option>
                      <option value="Tlaxcala">Tlaxcala</option>
                      <option value="Veracruz">Veracruz</option>
                      <option value="Yucatán">Yucatán</option>
                      <option value="Zacatecas">Zacatecas</option>
                    </select>
                    {errors.state && (
                      <p className="text-danger m-0">{errors.state.message}</p>
                    )}
                  </div>
                  <div className="d-flex justify-content-md-end mb-lg-5">
                    <ButtonAction
                      buttonClass="button-primary font-size-small mt-5"
                      text="Editar datos personales"
                      type="submit"
                    ></ButtonAction>

                    {/* <ButtonAction
                      buttonClass="button-primary font-size-small mt-5"
                      text="Guardar"
                      type="submit"
                    ></ButtonAction> */}
                  </div>
                </form>
              </div>
              <div>
                <h4 className="mb-0 mt-5 fw-bold">Sobre tu sitio</h4>
                <form action="#">
                  <div className="mt-1">
                    <h6>Foto de portada</h6>
                    {!headerPicture ? (
                      <div className="col-12">
                        <FormFile
                          fileType="image/*"
                          controlId="form-3"
                          // multiple={true}
                          onChange={handleHeaderPicture}
                        />
                      </div>
                    ) : (
                      <img
                        className="img-thumbnail"
                        src={URL.createObjectURL(headerPicture)}
                        alt="Header Picture"
                      />
                    )}
                    <div className="d-flex justify-content-md-end">
                      <ButtonAction
                        buttonClass="button-primary font-size-small mt-3"
                        text="Cambiar foto portada"
                        type="submit"
                      ></ButtonAction>
                      {headerPicture && (
                        <ButtonAction
                          buttonClass="button-secondary font-size-small mt-3 ms-3"
                          text="Eliminar"
                          type="button"
                          action={() => setHeaderPicture(null)}
                        ></ButtonAction>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              <form
                onSubmit={handleSubmit((data) => submitCraftsmanInfoSite(data))}
              >
                <div className="form-group">
                  <div className="mt-5">
                    <label htmlFor="storeName">Nombre de tu tienda</label>
                    <input
                      type="text"
                      className="form-control primary_input shadow-none mt-1"
                      name="storeName"
                      id="storeName"
                      placeholder="www.artetopia.com/tu-tienda"
                      {...register("storeName", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        pattern: {
                          value: /^[^\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/,
                          message:
                            "No debe de contener ningún caracter especial (~@#_-^*%/.+:;=) ni espacios en blanco",
                        },
                      })}
                    />
                    {errors.storeName && (
                      <p className="text-danger m-0">
                        {errors.storeName.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-2">
                    <label htmlFor="description">
                      Agrega una descripción sobre ti o tu tienda de artesanías
                    </label>
                    <textarea
                      type="text"
                      className="form-control primary_input shadow-none mt-1"
                      name="description"
                      id="description"
                      {...register("description", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                    />
                    {errors.description && (
                      <p className="text-danger m-0">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                  <h6 className="mt-3 mb-1">Redes sociales</h6>
                  <div className="row d-lg-flex">
                    <div className="mt-2 col-lg-6">
                      <div className="form-group">
                        <label htmlFor="facebook">Facebook</label>
                        <input
                          type="text"
                          className="form-control primary_input shadow-none"
                          name="facebook"
                          id="facebook"
                          placeholder="@"
                          {...register("facebook", {
                            pattern: {
                              value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                              message: "El valor ingresado no es una URL",
                            },
                          })}
                        />
                      </div>
                      {errors.facebook && (
                        <p className="text-danger m-0">
                          {errors.facebook.message}
                        </p>
                      )}
                      <div className="form-group">
                        <label className="mt-2" htmlFor="instagram">
                          Instagram
                        </label>
                        <input
                          type="text"
                          className="form-control primary_input shadow-none"
                          name="instagram"
                          id="instagram"
                          placeholder="@"
                          {...register("instagram", {
                            pattern: {
                              value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                              message: "El valor ingresado no es una URL",
                            },
                          })}
                        />
                      </div>
                      {errors.instagram && (
                        <p className="text-danger m-0">
                          {errors.instagram.message}
                        </p>
                      )}
                    </div>
                    <div className="mt-2 col-lg-6">
                      <div className="mb-1 form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input
                          type="text"
                          className="form-control primary_input shadow-none"
                          name="twitter"
                          id="twitter"
                          placeholder="@"
                          {...register("twitter", {
                            pattern: {
                              value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                              message: "El valor ingresado no es una URL",
                            },
                          })}
                        />
                      </div>
                      {errors.twitter && (
                        <p className="text-danger m-0">
                          {errors.twitter.message}
                        </p>
                      )}
                      <div className="form-group">
                        <label className="mt-1" htmlFor="tiktok">
                          TikTok
                        </label>
                        <input
                          type="text"
                          className="form-control primary_input shadow-none"
                          name="tiktok"
                          id="tiktok"
                          placeholder="@"
                          {...register("tiktok", {
                            pattern: {
                              value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                              message: "El valor ingresado no es una URL",
                            },
                          })}
                        />
                      </div>
                      {errors.tiktok && (
                        <p className="text-danger m-0">
                          {errors.tiktok.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-12 mt-3 mb-3">
                    <label htmlFor="city">Selecciona la categoría</label>
                    <Select
                      isMulti
                      options={options}
                      onChange={handleChange}
                      noOptionsMessage={noOptionsMessage}
                      placeholder="Categorías"
                      styles={customStyles}
                    />
                    {errorCategories && (
                      <p className="text-danger m-0">
                        Debe seleccionar una categoría
                      </p>
                    )}
                  </div>
                  <div className="d-flex justify-content-md-end">
                    <ButtonAction
                      buttonClass="button-primary font-size-small mt-3"
                      text="Editar"
                      type="submit"
                    ></ButtonAction>
                    {/* <ButtonAction
                      buttonClass="button-primary font-size-small mt-3"
                      text="Guardar"
                      type="submit"
                    ></ButtonAction> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftsmanProfile;
