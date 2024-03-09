import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import ButtonAction from "../../components/buttonAction";
import { useForm } from "react-hook-form";

const CheckoutForm = ({ makeOrder }) => {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const iframeStyles = {
    base: {
      color: "#2b2e4a",
      fontSize: "16px",
      iconColor: "#e91e63",
      "::placeholder": {
        color: "#000",
      },
    },
    invalid: {
      iconColor: "#e91e63",
      color: "#e91e63",
    },
    complete: {
      iconColor: "green",
    },
  };

  const onSubmit = async (data) => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement("card");
    const { error, token } = await stripe.createToken(cardElement);
    if(error) {
        console.log(error);
    } else {
        makeOrder(data, token);
    }
    // try {
    //     const { error, token } = await stripe.createToken(cardElement);
    //     console.log(token);
    // } catch (error) {
    //     console.log("error", error);
    // }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true,
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2">
          <label htmlFor="calle">calle</label>
          <input
            type="text"
            className="form-control primary_input shadow-none"
            name="calle"
            id="calle"
            {...register("street", {
              required: { value: true, message: "el campo es requerido" },
            })}
          />
          {errors.street && (
            <p className="text-danger m-0">{errors.street.message}</p>
          )}
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group mb-2">
              <label htmlFor="calle">Num Ext</label>
              <input
                type="text"
                className="form-control primary_input shadow-none"
                name="NumExt"
                id="NumExt"
                {...register("numExt", {
                  required: { value: true, message: "El campo es requerido" },
                })}
              />
              {errors.numExt && (
                <p className="text-danger m-0">{errors.numExt.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group mb-2">
              <label htmlFor="calle">Num int</label>
              <input
                type="text"
                className="form-control primary_input shadow-none"
                name="numInt"
                id="numInt"
                {...register("numInt", {
                  required: { value: false },
                })}
              />
              {errors.numInt && (
                <p className="text-danger m-0">{errors.numInt.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group mb-2">
              <label htmlFor="calle">Código postal</label>
              <input
                type="text"
                className="form-control primary_input shadow-none"
                name="zipCode"
                id="zipCode"
                {...register("zipCode", {
                  required: { value: true, message: "El campo es requerido" },
                  pattern: {
                    value: /^\d{5}$/,
                    message: "Código postal invalido",
                  },
                })}
              />
              {errors.zipCode && (
                <p className="text-danger m-0">{errors.zipCode.message}</p>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group mb-2">
              <label htmlFor="calle">Ciudad</label>
              <input
                type="text"
                className="form-control primary_input shadow-none"
                name="city"
                id="city"
                {...register("city", {
                  required: { value: true, message: "El campo es requerido" },
                })}
              />
              {errors.city && (
                <p className="text-danger m-0">{errors.city.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="calle">Estado</label>
          <select
            name="state"
            id="state"
            className="form-select primary_input shadow-none"
            {...register("state", {
              required: { value: true, message: "El campo es requerido" },
            })}
          >
            <option value="">Selecciona un estado</option>
            <option value="">Selecciona una opción</option>
            <option value="Aguscalientes">Aguascalientes</option>
            <option value="Baja california">Baja california</option>
            <option value="Baja california sur">Baja california sur</option>
            <option value="Campeche">Campeche</option>
            <option value="Chiapas">Chiapas</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="Coahuila de zaragoza">Coahuila de zaragoza</option>
            <option value="Colima">Colima</option>
            <option value="Durango">Durango</option>
            <option value="Estado de méxico">Estado de méxico</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Hidalgo">Hidalgo</option>
            <option value="Jalisco">Jalisco</option>
            <option value="Michoacán de ocampo">Michoacán de ocampo</option>
            <option value="Morelos">Morelos</option>
            <option value="Nayarit">Nayarit</option>
            <option value="Nuevo león">Nuevo león</option>
            <option value="Oaxaca">Oaxaca</option>
            <option value="Puebla">Puebla</option>
            <option value="Querétaro">Querétaro</option>
            <option value="Quintana roo">Quintana roo</option>
            <option value="San luis potosí">San luis potosí</option>
            <option value="Sinaloa">Sinaloa</option>
            <option value="Sonora">Sonora</option>
            <option value="Tabasco">Tabasco</option>
            <option value="Tamaulipas">Tamaulipas</option>
            <option value="Tamaulipas">Tamaulipas</option>
            <option value="Veracruz">Veracruz</option>
            <option value="Yucatán">Yucatán</option>
            <option value="Zacatecas">Zacatecas</option>
          </select>
          {errors.state && (
            <p className="text-danger m-0">{errors.state.message}</p>
          )}
        </div>
        <h3 className="font-weight-bold">Pago</h3>
        <CardElement options={cardElementOpts} />
        <ButtonAction
          // disabled={isLoading || !stripe || !elements}
          buttonClass="button-primary mt-3 float-right"
          type="submit"
          text={!isLoading ? `Pagar $100` : "Cargando"}
        ></ButtonAction>
      </form>
    </>
  );
};

export default CheckoutForm;
