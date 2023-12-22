import "./styles.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonAction from "../../components/buttonAction";
import {useForm} from 'react-hook-form';

const Checkout = () => {
  const [expirationDate, setExpirationDate] = useState("");
  const [errorsDateExpiration, setErrorsDateExpiration] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const [productsCart, setProductsCart] = useState ([
  //     {
  //       "Id": "1",
  //       "name": "Artesano 1",
  //       "products": [
  //           { "id": "1", "name": "producto1", "quantity": 2, "image": "https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b" },
  //           { "id": "2", "name": "producto2", "quantity": 3, "image": "https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b" }
  //       ]
  //     },
  //     {
  //       "Id": "2",
  //       "name": "Artesano 2",
  //       "products": [
  //           { "id": "3", "name": "producto3", "quantity": 3, "image": "https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b" },
  //           { "id": "4", "name": "producto4", "quantity": 4, "image": "https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b" }
  //       ]
  //     }
  //   ]);

  const makeOrder = (data) => {
    console.log(data);
  }

  const formatExpirationDate = (value) => {
    const numericValue = value.replace(/\D/g, '');

    if (numericValue.length >= 2) {
      const month = numericValue.slice(0, 2);
      const year = numericValue.slice(2, 4);
      return `${month}/${year}`;
    }

    return numericValue;
  };

  const handleInputChange = (e) => {
    // Your existing input change logic, if any

    // Format the expirationDate to MM/YY
    const rawValue = e.target.value;
    const formattedValue = formatExpirationDate(rawValue);

    // Set the formatted value back to the input
    e.target.value = formattedValue;
  };


  return (
    <>
      <div className="container mt-3 checkout-container">
        <div className="row">
          <div className="col-lg-6 p-4">
            <h3 className="font-weight-bold">Dirección de envío</h3>
            <form onSubmit={handleSubmit((data) => makeOrder(data))}>
              <div className="form-group mb-2">
                <label htmlFor="calle">calle</label>
                <input
                  type="text"
                  className="form-control primary_input shadow-none"
                  name="calle"
                  id="calle"
                  {...register("street", {
                    required: {value: true, message: "el campo es requerido"}
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
                        required: {value: true, message: "El campo es requerido"}
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
                        required: {value: false}
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
                        required: {value: true, message: "El campo es requerido"},
                        pattern: {value: /^\d{5}$/, message: "Código postal invalido"}
                      })}
                    />
                    {errors.zipCode &&(
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
                        required: {value: true, message: "El campo es requerido"}
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
                    required: {value: true, message: "El campo es requerido"}
                  })}
                >
                  <option value="">Selecciona un estado</option>
                  <option value="">Selecciona una opción</option>
                  <option value="Aguscalientes">Aguascalientes</option>
                  <option value="Baja california">Baja california</option>
                  <option value="Baja california sur">
                    Baja california sur
                  </option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Coahuila de zaragoza">
                    Coahuila de zaragoza
                  </option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de méxico">Estado de méxico</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michoacán de ocampo">
                    Michoacán de ocampo
                  </option>
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
              <div className="row">
                <div className="col-12">
                  <div className="form-group mb-2">
                    <label htmlFor="">Número de tarjeta</label>
                    <input
                      type="text"
                      className="form-control primary_input shadow-none"
                      name="cardNumber"
                      id="cardNumber"
                      {...register("cardNumber", {
                        required: {value: true, message: "El campo es requerido"},
                        pattern: {value: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/, message: "El número de tarjeta es invalido"}
                      })}
                    />
                    {errors.cardNumber && (
                      <p className="text-danger m-0">{errors.cardNumber.message}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Nombre de titular</label>
                    <input
                      type="text"
                      className="form-control primary_input shadow-none"
                      name="name"
                      id="name"
                      {...register("cardName", {
                        required: {value: true, message: "El campo es requerido"}
                      })}
                    />
                    {errors.cardName && (
                      <p className="text-danger m-0">{errors.cardName.message}</p>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Fecha de expiración</label>
                  <input
                    type="text"
                    className="form-control primary_input shadow-none"
                    name="expirationDate"
                    id="expirationDate"
                    placeholder="MM/YY"
                    // value={expirationDate}
                    // onChange={handleInputChange}
                    // {...register("expirationDate")}
                    {...register('expirationDate', {
                      required: 'Expiration Date is required',
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                        message: 'Formato invalido. Utilice el formato mm/yy',
                      },
                    })}
                    onChange={handleInputChange}
                  />
                  {errors.expirationDate && (
                     <p className="text-danger m-0">{errors.expirationDate.message}</p>
                  )}
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">CVC</label>
                  <input
                    type="text"
                    className="form-control primary_input shadow-none"
                    name="cvc"
                    id="cvc"
                    {...register("cvc", {
                      required: {value: true, message: "El campo es requerido"},
                      minLength: {value: 3, message: "CVC invalido"},
                      maxLength: {value: 4, message: "CVC invalido"}
                    })}
                  />
                  {errors.cvc && (
                    <p className="text-danger m-0">{errors.cvc.message}</p>
                  )}
                </div>
              </div>
              <ButtonAction
                buttonClass="button-primary mt-3 float-right"
                text={`Pagar $100`}
              ></ButtonAction>
            </form>
          </div>
          <div className="col-lg-6 p-4">
            <h2>Productos seleccionados</h2>
            <div className="container artesanoContainer-products checkoutBorder__primary my-3">
              <h4 className="text-center text-weight-bold mt-2">Artesano 1</h4>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="productContainer d-flex align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="controls d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="icon"
                ></FontAwesomeIcon>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="productContainer d-flex align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="controls d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="icon"
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="container artesanoContainer-products checkoutBorder__primary my-3">
              <h4 className="text-center text-weight-bold mt-2">Artesano 1</h4>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="productContainer d-flex align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="controls d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="icon"
                ></FontAwesomeIcon>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="productContainer d-flex align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="controls d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="icon"
                ></FontAwesomeIcon>
              </div>
            </div>
            <div className="container checkoutBorder__primary p-4">
              <div className="d-flex justify-content-around">
                <h4 className="font-weight-bold">Subtotal:</h4>
                <h4 className="font-weight-bold">$800.00</h4>
              </div>
              <div className="d-flex justify-content-around">
                <h4 className="font-weight-bold">Total:</h4>
                <h4 className="font-weight-bold">$1000.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
