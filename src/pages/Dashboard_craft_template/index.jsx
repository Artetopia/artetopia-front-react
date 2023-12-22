import "../../styles/app.css"
import ButtonAction from "../../components/buttonAction";
import "./styles/styles.css"
import ContainerImge from "../../components/container_up_img";
const DashboardTemplate = () => {
    return (
        <div className="container">
            <h2 className="heading_primary text-center mb-3">Selecciona una plantilla</h2>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Plantilla A
                        </label>
                        <br />
                        <img src="/images/plantilla_A.png" alt="" className="w-100" />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Plantilla B
                        </label>
                        <br />
                        <img src="/images/plantilla_B.png" alt="" className="w-100" />
                    </div>
                </div>
                <div className="mb-3">
                    <h3>Edita la Informacion Adicional de la plantilla A</h3>
                    <input
                        id="description"
                        name="description"
                        placeholder="   Descripción"
                        type="text"
                        className="w-100 rounded-pill p-1"
                    />
                    <div className="row mt-3">
                        <div className="col-12 col-md-4">
                            <input
                                id="fk"
                                name="fk"
                                placeholder="   Facebook"
                                type="text"
                                className="w-100 rounded-pill p-1"
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <input
                                id="In"
                                name="in"
                                placeholder="   Instagram"
                                type="text"
                                className="w-100 rounded-pill p-1"
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <input
                                id="tik"
                                name="tik"
                                placeholder="   TikTok"
                                type="text"
                                className="w-100 rounded-pill p-1"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h3>Selecciona la paleta de colores que quieres agregar</h3>
                <div className="col-12 col-lg-4 mb-3">
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3" checked />
                        <br />
                        <div className="prymaricolor1 w-100">

                        </div>
                        <div className="secondarycolor1">

                        </div>
                        <div className="thirdcolor1">

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
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
                <div className="col-12 col-lg-4">
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
                <div className="text-center">
                    <h3 className="fw-bold">Sube las fotos que deseas tener para slider</h3>
                    <img src="/file_up.svg" alt="" className="" />
                    <div className="d-flex justify-content-center">
                        <a className="link_up">Click to upload</a> <p className="ml-3">or drag and drop</p>
                    </div>
                    <ContainerImge nombreImage="Imagen1"></ContainerImge>
                    <ContainerImge nombreImage="Imagen2"></ContainerImge>
                    <ContainerImge nombreImage="Imagen3"></ContainerImge>
                    <ContainerImge nombreImage="Imagen4"></ContainerImge>
                </div>
            </div>
            <div className="container text-center">
                <ButtonAction
                    buttonClass="button-primary m-3"
                    text="Guardar"></ButtonAction>
            </div>
        </div>

    )
}
export default DashboardTemplate;