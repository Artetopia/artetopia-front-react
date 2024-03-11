import "./styles.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ButtonAction from "../../components/buttonAction";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import {useForm} from 'react-hook-form';
import CheckoutForm from "../../components/checkoutForm";

const Checkout = () => {
  const stripePromise = loadStripe("pk_test_51OS8PlJdQNrbJCRs1wKGYLhllHbfafYkvqj6sMwFZiNUNjXrz3gxcSVW857L8f4Wl96b7kWWhb0RZDIkH3RblnX700nFkTp55i");

  const makeOrder = (data, cardToken) => {
    console.log("data address", data);
    console.log("card Token", cardToken);
  }

  return (
    <>
      <div className="container mt-3 checkout-container">
        <div className="row">
          <div className="col-lg-6 p-4">
            <h3 className="font-weight-bold">Dirección de envío</h3>
            <Elements stripe={stripePromise}>
            <CheckoutForm makeOrder={makeOrder}/>
            </Elements>
          </div>
          <div className="col-lg-6 p-4">
          <h2>Productos seleccionados</h2>
            <div className="container artesanoContainer-products checkoutBorder__primary my-3 overflow-auto">
              <h4 className="text-center text-weight-bold mt-2">Artesano 1</h4>
              <div className="artesanoContainer__products-maxHeight">
              <div className="d-md-flex justify-content-around align-items-center mb-2 mt-2">
                <div className="productContainer d-flex justify-content-center align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="d-flex d-md-flex justify-content-center align-items-center mt-3 mt-sm-0">
                <div className="controls d-flex align-items-center mr-3 mr-md-5">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls text-center"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="icon"
                ></FontAwesomeIcon>
                </div>
              </div>
              <hr className="artesano__line-primary m-0"/>
              <div className="d-md-flex justify-content-around align-items-center mb-2 mt-2">
                <div className="productContainer d-flex justify-content-center align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="d-flex d-md-flex justify-content-center align-items-center mt-3 mt-sm-0">
                <div className="controls d-flex align-items-center mr-3 mr-md-5">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls text-center"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="icon"
                ></FontAwesomeIcon>
                </div>
              </div>
              <hr className="artesano__line-primary m-0"/>
              <div className="d-md-flex justify-content-around align-items-center mb-2 mt-2">
                <div className="productContainer d-flex justify-content-center align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="d-flex d-md-flex justify-content-center align-items-center mt-3 mt-sm-0">
                <div className="controls d-flex align-items-center mr-3 mr-md-5">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls text-center"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="icon"
                ></FontAwesomeIcon>
                </div>
              </div>
              </div>
            </div>
            <div className="container artesanoContainer-products checkoutBorder__primary my-3 overflow-auto">
              <h4 className="text-center text-weight-bold mt-2">Artesano 1</h4>
              <div className="artesanoContainer__products-maxHeight">
              <div className="d-md-flex justify-content-around align-items-center mb-2 mt-2">
                <div className="productContainer d-flex justify-content-center align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="d-flex d-md-flex justify-content-center align-items-center mt-3 mt-sm-0">
                <div className="controls d-flex align-items-center mr-3 mr-md-5">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls text-center"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="icon"
                ></FontAwesomeIcon>
                </div>
              </div>
              <hr className="artesano__line-primary m-0"/>
              <div className="d-md-flex justify-content-around align-items-center mb-2 mt-2">
                <div className="productContainer d-flex justify-content-center align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="d-flex d-md-flex justify-content-center align-items-center mt-3 mt-sm-0">
                <div className="controls d-flex align-items-center mr-3 mr-md-5">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls text-center"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="icon"
                ></FontAwesomeIcon>
                </div>
              </div>
              <hr className="artesano__line-primary m-0"/>
              <div className="d-md-flex justify-content-around align-items-center mb-2 mt-2">
                <div className="productContainer d-flex justify-content-center align-items-center">
                  <img
                    src="https://img.freepik.com/free-psd/laptop-mock-up_1310-197.jpg?w=1800&t=st=1703205183~exp=1703205783~hmac=9e7f0bc919569d3dae0f9c17f010bc8a3e06cd8378360c5c67cd0ff7c8b2802b"
                    alt=""
                    className="productImage"
                  />
                  <p className="productName mx-2 mb-0">Producto 1</p>
                </div>
                <div className="d-flex d-md-flex justify-content-center align-items-center mt-3 mt-sm-0">
                <div className="controls d-flex align-items-center mr-3 mr-md-5">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="mx-2"
                  ></FontAwesomeIcon>
                  <input
                    type="text"
                    className="form-control inputControls text-center"
                    disabled
                    value={2}
                  />
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="ms-2"
                  ></FontAwesomeIcon>
                </div>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="icon"
                ></FontAwesomeIcon>
                </div>
              </div>
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
