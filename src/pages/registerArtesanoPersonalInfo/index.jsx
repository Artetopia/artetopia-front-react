import "./styles.css";
import ButtonAction from "../../components/buttonAction";
import {useForm} from 'react-hook-form';
import Stepper from "../../components/Stepper";
const RegisterArtesanoPersonalInfo = () => {
  const CURRENT_PAGE = 1;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="container personalInfo-container">
        <div className="row">
          <Stepper step={CURRENT_PAGE}/>
        </div>
        <div className="row text-center">
          <h1 className="personalInfo-heading">
            Crea tu sitio en <span className="personalInfo-heading__primary">Artetopia</span>
          </h1>
          <h3 className="personalInfo-subHeading">Información personal</h3>
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="row mt-4">
            <div className="col-12 col-lg-6">
              <div className="form-group mb-3">
                <label htmlFor="">Nombre(s)</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control input_primary"
                  {...register("name", {
                    required: {value: true, message: "El campo es obligatorio"}
                  })}
                />
                {errors.name && (
                  <p className="text-danger m-0">{errors.name.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control input_primary"
                  {...register("phone", {
                    required: {value: true, message: "El campo es obligatorio"},
                    minLength: {value: 10, message: "El teléfono debe de contener 10 dígitos"},
                    maxLength: {value: 10, message: "El teléfono debe de contener 10 dígitos"}
                  })}
                />
                   {errors.phone && (
                  <p className="text-danger m-0">{errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-group mb-3">
                <label htmlFor="">Apellido(s)</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="form-control input_primary"
                  {...register("lastname", {
                    required: {value: true, message: "El campo es obligatorio"}
                  })}
                />
                   {errors.lastname && (
                  <p className="text-danger m-0">{errors.lastname.message}</p>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Estado</label>
                <select name="state" id="state" className="form-control input_primary" {...register("state", {
                  required: {value: true, message: "El campo es requerido"}
                })}>
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
            </div>
          </div>
          <div className="text-center mt-4">
            <ButtonAction
              buttonClass="button-primary"
              text="Siguiente"
            ></ButtonAction>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterArtesanoPersonalInfo;
