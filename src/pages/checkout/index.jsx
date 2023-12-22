import "./styles.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonAction from "../../components/buttonAction";
import {useForm} from 'react-hook-form';

const Checkout = () => {
  const [expirationDate, setExpirationDate] = useState("");

  const {
    register,
    handleSubmit,
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

  const formatExpirationDate = (value) => {
    const formattedValue = value.replace(/\D/g, "").slice(0, 4);

    if (formattedValue.length >= 2) {
      console.log(
        `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`
      );
      return `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setExpirationDate(formatExpirationDate(value));
  };
  return (
    <>
      <div className="container mt-3 checkout-container">
        <div className="row">
          <div className="col-lg-6 p-4">
            <h3 className="font-weight-bold">Dirección de envío</h3>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
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
                      id="NumInt"
                      {...register("numInt")}
                    />
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
                      name="codigoPostal"
                      id="codigoPostal"
                    />
                    <p className="text-danger m-0">Error</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-2">
                    <label htmlFor="calle">Num ext</label>
                    <input
                      type="text"
                      className="form-control primary_input shadow-none"
                      name="Num ext"
                      id="Num ext"
                    />
                    <p className="text-danger m-0">Error</p>
                  </div>
                </div>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="calle">Estado</label>
                <select
                  name=""
                  id=""
                  className="form-select primary_input shadow-none"
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
                <p className="text-danger m-0">Error</p>
              </div>
              <h3 className="font-weight-bold">Pago</h3>
              <div className="row">
                <div className="col-12">
                  <div className="form-group mb-2">
                    <label htmlFor="">Número de tarjeta</label>
                    <input
                      type="text"
                      className="form-control primary_input shadow-none"
                      name="numtarjeta"
                      id="numTarjeta"
                    />
                    <p className="text-danger m-0">Error</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Nombre de titular</label>
                    <input
                      type="text"
                      className="form-control primary_input shadow-none"
                      name="nombre"
                      id="nombre"
                    />
                    <p className="text-danger m-0">Error</p>
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
                    value={expirationDate}
                    onChange={handleInputChange}
                  />
                  <p className="text-danger m-0">Error</p>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">CVC</label>
                  <input
                    type="text"
                    className="form-control primary_input shadow-none"
                    name="cvc"
                    id="cvc"
                  />
                  <p className="text-danger m-0">Error</p>
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
