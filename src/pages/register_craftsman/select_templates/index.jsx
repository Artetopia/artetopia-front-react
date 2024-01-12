import "../../../styles/app.css";
import "./styles/styles.css";
import ButtonAction from "../../../components/buttonAction";
import Stepper from "../../../components/Stepper";
import { useForm } from "react-hook-form";
const SelectTemplate = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="container">
      <Stepper step={5}></Stepper>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <h2 className="heading_primary text-center mb-3">
          Selecciona una plantilla
        </h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="form-check">
              <input
                {...register("template", {
                    required: {value: true, message: "El campo es obligatorio"}
                })}
                type="radio"
                value="templateA"
                id="templateA"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="templateA">
                Plantilla A
              </label>
              <br />
              <img src="/images/plantilla_A.png" alt="" className="w-100" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-check">
            <input
                {...register("template", {
                    required: {value: true, message: "El campo es obligatorio"}
                })}
                type="radio"
                value="templateB"
                id="templateB"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="templateB">
                Plantilla B
              </label>
              <br />
              <img src="/images/plantilla_B.png" alt="" className="w-100" />
            </div>
          </div>
          {errors.template && (
            <p className="text-danger m-0">{errors.template.message}</p>
          )}
        </div>
        <div className=" container row my-3">
          <h3>Selecciona la paleta de colores que quieres agregar</h3>
          <div className="col-12 col-lg-4 mb-3">
            <div className="form-check">
            <input
                {...register("color", {
                    required: {value: true, message: "El campo es obligatorio"}
                })}
                type="radio"
                value="Color1"
                id="Color1"
                className="form-check-input"
              />
              <br />
              <div className="prymaricolor1"></div>
              <div className="secondarycolor1"></div>
              <div className="thirdcolor1"></div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-3">
            <div className="form-check">
            <input
                {...register("color", {
                    required: {value: true, message: "El campo es obligatorio"}
                })}
                type="radio"
                value="Color2"
                id="Color2"
                className="form-check-input"
              />
              <br />
              <div className="prymaricolor2"></div>
              <div className="secondarycolor2"></div>
              <div className="thirdcolor2"></div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-3">
            <div className="form-check">
            <input
               {...register("color", {
                required: {value: true, message: "El campo es obligatorio"}
            })}
                type="radio"
                value="Color3"
                id="Color3"
                className="form-check-input"
              />
              <br />
              <div className="prymaricolor3"></div>
              <div className="secondarycolor3"></div>
              <div className="thirdcolor3"></div>
            </div>
          </div>
          {errors.color && (
            <p className="text-danger m-0">{errors.color.message}</p>
          )}
        </div>
        <div className="container text-center">
          <ButtonAction
            buttonClass="button-secondary m-3"
            text="Atras"
            type="button"
          ></ButtonAction>
          <ButtonAction
            buttonClass="button-primary m-3"
            text="Siguiente"
            type="submit"
          ></ButtonAction>
        </div>
      </form>
    </div>
  );
};
export default SelectTemplate;
