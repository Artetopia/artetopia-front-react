import "./styles.css"
import React from 'react';
import { Button } from 'reactstrap';
import Step8image from "/assets/reg_step-8.svg"


const Step_8 = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
      <h1 className="tittle">Felicidades!</h1>
      <p className="paragraph">
        Haz concluido tu registro como <span className="paragraph_bold">artesano vendedor</span> en <span className="paragraph_pink">Artetopia.</span>
      </p>
      <img src={Step8image} alt="Joven que felizita al usuario con el registro" className="image_final-step" />
      <p className="paragraph_confirmation">
        Por favor, revisa tu correo los proximos dias porque te estaremos
        enviando la <span className="paragraph_bold"> confirmacion de tu perfil.</span>
      </p>

      <div>
      <Button color="primary" style={{ backgroundColor: "#e91e63", outline: "none" }}>
          Regresar a Artetopia
        </Button>
      </div>
      </div>
    </>
  );
};
export default Step_8;
