import "../VerifyAccount/styles.css";
import ButtonAction from "../../components/buttonAction";
import { useForm } from "react-hook-form";

const VerifyAccount = ({ email }) => {
  // const { email } = userForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) {
      console.log("Por favor, completa todos los campos.");
      return;
    }
    console.log(data);
  };

  return (
    <>
      <section className="container">
        <section className="row d-flex flex-column align-items-center text-center">
          <div className="d-flex flex-column align-items-lg-start text-lg-start text-xl-start">
            <h1 className="title-verification mt-5 ms-lg-5 fs-sm-3">
              Verifica tu cuenta
            </h1>
            <p className="fs-4 col-lg-9 col-xl-8 ms-lg-5">
              Hemos enviado un código de verificación a tu correo electrónico{" "}
              {email}.
            </p>
            <p className="my-3 fs-4 ms-lg-5">Por favor, ingresa el código:</p>
          </div>
          <form
            // onSubmit={handleSubmit((data) => console.log(data))}
            onSubmit={handleSubmit(onSubmit)}
            className="col-lg-6"
            action="#"
          >
            <div className="mt-1">
              <input
                type="number"
                className="input-codes p-4 mx-1 mx-md-2 verify-input"
                name="firstNumber"
                id="firstNumber"
                inputMode="numeric"
                maxLength="1"
                // value="1"
                {...register("firstNumber", {
                  required: {
                    value: true,
                    message: "El campo es obligatorio",
                  },
                })}
              />
              <input
                type="number"
                className="input-codes p-4 mx-1 mx-md-2 verify-input"
                name="secondNumber"
                id="secondNumber"
                inputMode="numeric"
                maxLength="1"
                // value=""
                {...register("secondNumber", {
                  required: {
                    value: true,
                    message: "El campo es obligatorio",
                  },
                })}
              />
              <input
                type="number"
                className="input-codes p-4 mx-1 mx-md-2 verify-input"
                name="thirdNumber"
                id="thirdNumber"
                inputMode="numeric"
                maxLength="1"
                // value=""
                {...register("thirdNumber", {
                  required: {
                    value: true,
                    message: "El campo es obligatorio",
                  },
                })}
              />
              <input
                type="number"
                className="input-codes p-4 mx-1 mx-md-2 verify-input"
                name="forthNumber"
                id="forthNumber"
                inputMode="numeric"
                maxLength="1"
                // value=""
                {...register("forthNumber", {
                  required: {
                    value: true,
                    message: "El campo es obligatorio",
                  },
                })}
              />
            </div>
            {Object.keys(errors).length > 0 && (
              <div>
                <p className="text-danger m-0 mt-2">
                  Por favor, completa todos los campos
                </p>
              </div>
            )}
            <p className="mt-3 mb-2 fs-5">5:00</p>
            <p className="fs-6">
              ¿No recibiste el código?{" "}
              <a href="#" className="send-again icon-link">
                Enviar de nuevo
              </a>
            </p>
            <ButtonAction
              buttonClass="button-primary my-3 my-lg-4"
              text="Continuar"
              type="submit"
            ></ButtonAction>
          </form>
        </section>
      </section>
    </>
  );
};

export default VerifyAccount;
