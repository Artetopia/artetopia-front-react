import "./styles.css"
import React from 'react';
import { Button } from 'reactstrap';
import Step8image from "/assets/reg_step-8.svg"
import ButtonAction from "../../components/buttonAction";


const Step_8 = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center align-items-center">
      <h1 className="tittle">Felicidades!</h1>
      </div>
      <img src={Step8image} alt="Joven que felizita al usuario con el registro" className="image_final-step" />
      <p className="paragraph_confirmation">
        Por favor, revisa tu correo los proximos dias porque te estaremos
        enviando la <span className="paragraph_bold"> confirmacion de tu perfil.</span>
      </p>

      <div>
      <ButtonAction text="Regresar a Artetopia" buttonClass="button-primary" type="button"></ButtonAction>
      </div>
      </div>
    </>
  );
};
export default Step_8;
