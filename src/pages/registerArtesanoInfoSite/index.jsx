import "./styles.css";
import ButtonAction from "../../components/buttonAction";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Select from "react-select";
import { useState } from "react";
import Stepper from "../../components/Stepper";
const RegisterArtesanoInfoSite = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errorCategories, setErrorCategories] = useState(false);

  const CURRENT_PAGE = 2;

  const checkSelectedOptions = () => {
    console.log(selectedOptions);
    selectedOptions.length > 0 && setErrorCategories(false);
  };

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    checkSelectedOptions();
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "50px",
      borderColor: "#000000"
    }),
  };

  const submitArtesanoInfoSite = (data) => {
    if (selectedOptions.length > 0) {
      console.log(selectedOptions);
      console.log(data);
    } else {
      setErrorCategories(true);
    }
  };

  const noOptionsMessage = ({ inputValue }) =>
    `No se econtro el valor: "${inputValue}"`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div className="container infoSite-container">
        <div className="row mt-3">
          <Stepper step={CURRENT_PAGE}></Stepper>
        </div>
        <div className="row text-center">
          <h3 className="infoSite-subHeading mt-2 mt-lg-0">
            Información de tu sitio
          </h3>
        </div>
        <form onSubmit={handleSubmit((data) => submitArtesanoInfoSite(data))}>
          <div className="row mt-4">
            <div className="col-12">
              <div className="form-group mb-3">
                <label htmlFor="">Elige el nombre de tu tienda</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control input_primary"
                  {...register("name", {
                    required: { value: true, message: "El campo es requrido" },
                    pattern: {
                      value: /^[^\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/,
                      message:
                        "No debe de contener ningun caracter especial(~@#_-^*%/.+:;=) y espacios en blanco",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-danger m-0">{errors.name.message}</p>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Descripción de tu tienda</label>
                <textarea
                  className="form-control input_primary"
                  name="description"
                  id="description"
                  cols="5"
                  rows="5"
                  {...register("description", {
                    required: { value: true, message: "El campo es requerido" },
                  })}
                ></textarea>
                {errors.description && (
                  <p className="text-danger m-0">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
            <label className="mb-3">Redes sociales</label>
            <div className="col-12 col-lg-6">
              <div className="form-group mb-3">
                <div className="input-group input_primary">
                  <div className="input-group-prepend">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="input-group-text m-1 bg-transparent border-0"
                      id="facebook"
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control input-primary__border"
                    aria-describedby="facebook"
                    name="facebook"
                    {...register("facebook", {
                      pattern: {
                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                        message: "El valor no es una url",
                      },
                    })}
                  />
                </div>
                {errors.facebook && (
                  <p className="text-danger m-0">{errors.facebook.message}</p>
                )}
              </div>
              <div className="from-group mb-3">
                <div className="input-group input_primary">
                  <div className="input-group-prepend">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="input-group-text m-1 bg-transparent border-0"
                      id="instagram"
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control input-primary__border"
                    aria-describedby="instagram"
                    name="instagram"
                    {...register("instagram", {
                      pattern: {
                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                        message: "El valor no es una url",
                      },
                    })}
                  />
                </div>
                {errors.instagram && (
                  <p className="text-danger m-0">{errors.facebook.message}</p>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-group mb-3">
                <div className="input-group input_primary">
                  <div className="input-group-prepend">
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="input-group-text m-1 bg-transparent border-0"
                      id="twitter"
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control input-primary__border"
                    aria-describedby="twitter"
                    name="twitter"
                    {...register("twitter", {
                      pattern: {
                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                        message: "El valor no es una url",
                      },
                    })}
                  />
                </div>
                {errors.twitter && (
                  <p className="text-danger m-0">{errors.facebook.message}</p>
                )}
              </div>
              <div className="form-group mb-3">
                <div className="input-group input_primary">
                  <div className="input-group-prepend">
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className="input-group-text m-1 bg-transparent border-0"
                      id="tiktok"
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control input-primary__border"
                    aria-describedby="tiktok"
                    name="tiktok"
                    {...register("tiktok", {
                      pattern: {
                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                        message: "El valor no es una url",
                      },
                    })}
                  />
                </div>
                {errors.tiktok && (
                  <p className="text-danger m-0">{errors.facebook.message}</p>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-3">
                <label htmlFor="">Categorías</label>
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
                    Debe de seleccionar una categoria
                  </p>
                )}
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input form-check-input__primary"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="shipment"
                    {...register("shipment")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Puedo realizar envios por medio de paqueterias (DHL, UPS,
                    FedEx, Estafeta o alguna otra)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
          <ButtonAction
              buttonClass="btn button-secondary mr-3"
              text="Atras"
              action="../register/personalInfo"
            ></ButtonAction>
            <ButtonAction
              buttonClass="button-primary"
              text="Siguiente"
              type="submit"
            ></ButtonAction>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterArtesanoInfoSite;
