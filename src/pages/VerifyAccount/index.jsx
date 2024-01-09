import ButtonAction from "../../components/buttonAction";
import "../VerifyAccount/styles.css";

const VerifyAccount = () => {
  // const { email } = userForm();
  return (
    <>
      <section className="container">
        <section className="row d-flex flex-column align-items-center text-center">
          <div className="d-flex flex-column align-items-lg-start text-lg-start text-xl-start">
            <h1 className="title-verification mt-lg-5 ms-lg-5 fs-sm-3">
              Verifica tu cuenta
            </h1>
            <p className="fs-4 col-lg-9 col-xl-8 ms-lg-5">
              Hemos enviado un código de verificación a tu correo electrónico
              ejemplo@ejemplo.com
              {/* {email} */}
            </p>
            <p className="fs-4 ms-lg-5">Por favor, ingresa el código:</p>
          </div>

          <div>
            <input
              className="input-codes p-4 mx-1 mx-md-2 verify-input"
              type="text"
              inputMode="numeric"
              maxLength="1"
              value="1"
            />
            <input
              className="input-codes p-4 mx-1 mx-md-2 verify-input"
              type="text"
              inputMode="numeric"
              maxLength="1"
              value=""
            />
            <input
              className="input-codes p-4 mx-1 mx-md-2 verify-input"
              type="text"
              inputMode="numeric"
              maxLength="1"
              value=""
            />
            <input
              className="input-codes p-4 mx-1 mx-md-2 verify-input"
              type="text"
              inputMode="numeric"
              maxLength="1"
              value=""
            />
          </div>
          <p className="mt-3 mb-2 fs-5">5:00</p>
          <p className="fs-6">
            ¿No recibiste el código?{" "}
            <a href="#" className="send-again icon-link">
              Enviar de nuevo
            </a>
          </p>
          <ButtonAction
            buttonClass="button-primary mt-1"
            text="Continuar"
          ></ButtonAction>
        </section>
      </section>
    </>
  );
};

export default VerifyAccount;
