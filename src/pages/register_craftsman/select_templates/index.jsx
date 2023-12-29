import "../../../styles/app.css"
import "./styles/styles.css"
import ButtonAction from "../../../components/buttonAction";
import Stepper from "../../../components/Stepper";
const SelectTemplate = () => {
    return (
        <div className="container">
            <Stepper step={5}></Stepper>
            <h2 className="heading_primary text-center mb-3">Selecciona una plantilla</h2>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Plantilla A
                        </label>
                        <br />
                        <img src="/images/plantilla_A.png" alt="" className="w-100" />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Plantilla B
                        </label>
                        <br />
                        <img src="/images/plantilla_B.png" alt="" className="w-100" />
                    </div>
                </div>
            </div>
            <div className=" container row my-3">
                <h3>Selecciona la paleta de colores que quieres agregar</h3>
                <div className="col-12 col-lg-4 mb-3">
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" checked />
                        <br />
                        <div className="prymaricolor1">

                        </div>
                        <div className="secondarycolor1">

                        </div>
                        <div className="thirdcolor1">

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                        <br />
                        <div className="prymaricolor2">

                        </div>
                        <div className="secondarycolor2">

                        </div>
                        <div className="thirdcolor2">

                        </div>
                    </div>
                </div>
            
            <div className="col-12 col-lg-4 mb-3">
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" />
                    <br />
                    <div className="prymaricolor3">

                    </div>
                    <div className="secondarycolor3">

                    </div>
                    <div className="thirdcolor3">

                    </div>
                </div>
            </div>
            </div>
            <div className="container text-center">
                <ButtonAction
                    buttonClass="button-secondary m-3"
                    text="Atras"></ButtonAction>
                <ButtonAction
                    buttonClass="button-primary m-3"
                    text="Siguiente"></ButtonAction>
            </div>
        </div>

    )
}
export default SelectTemplate;