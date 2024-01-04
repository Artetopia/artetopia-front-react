import "./styles.css";
import ButtonAction from "../../components/buttonAction";
import FormFile from "../../components/FormFile/FormFile";

const CraftsmanProfile = () => {
  // const
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <div className="col-12"></div> */}
          <div>
            <div className="p-4 px-md-5 m-md-5">
              <div className="d-lg-flex">
                <form className="col-lg-6" action="#">
                  <div className="d-flex justify-content-center p-xl-3">
                    {/* <div className="col-12">
                    <FormFile
                      className="profile-pic-size"
                      fileType="image/*"
                      controlId="form-3"
                      // multiple={true}
                      // onChange={handleProductPicsChange}
                    />
                  </div> */}
                    <img
                      className="profile-picture__craftsman img-fluid img-thumbnail"
                      src="../public/images/craftsmanProfilePicture.png"
                      alt="Profile Picture"
                    />
                  </div>
                  <div className="d-flex justify-content-md-center">
                    <ButtonAction
                      buttonClass="button-primary font-size-small mt-4 mt-xl-1"
                      text="Cambiar foto perfil"
                    ></ButtonAction>
                  </div>
                </form>
                <form className="col-lg-6" action="#">
                  <div className="form-group mt-2 mt-xl-4">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      className="form-control primary_input shadow-none mt-1"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="surname">Apellidos</label>
                    <input
                      type="text"
                      className="form-control primary_input shadow-none mt-1"
                      name="surname"
                      id="surname"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="phone">Teléfono</label>
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control primary_input shadow-none mt-1"
                        name="phone"
                        id="phone"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="city">Estado</label>
                    <select
                      type="text"
                      className="form-select form-select-lg primary_input shadow-none mt-1 craftsman-profile-font-dropdown content-colorSecondary__input"
                      name="state"
                      id="state"
                    >
                      <option value="Aguascalientes">Aguascalientes</option>
                      <option value="Baja California">Baja California</option>
                      <option value="Baja California Sur">
                        Baja California Sur
                      </option>
                      <option value="Campeche">Campeche</option>
                      <option value="Chiapas">Chiapas</option>
                      <option value="Chihuahua">Chihuahua</option>
                      <option value="Ciudad de México">Ciudad de México</option>
                      <option value="Coahuila">Coahuila</option>
                      <option value="Colima">Colima</option>
                      <option value="Durango">Durango</option>
                      <option value="Estado de México">Estado de México</option>
                      <option value="Guanajuato">Guanajuato</option>
                      <option value="Guerrero">Guerrero</option>
                      <option value="Hidalgo">Hidalgo</option>
                      <option value="Jalisco">Jalisco</option>
                      <option value="Michoacán">Michoacán</option>
                      <option value="Morelos">Morelos</option>
                      <option value="Nayarit">Nayarit</option>
                      <option value="Nuevo León">Nuevo León</option>
                      <option value="Oaxaca">Oaxaca</option>
                      <option value="Puebla">Puebla</option>
                      <option value="Querétaro">Querétaro</option>
                      <option value="Quintana Roo">Quintana Roo</option>
                      <option value="San Luis Potosí">San Luis Potosí</option>
                      <option value="Sinaloa">Sinaloa</option>
                      <option value="Sonora">Sonora</option>
                      <option value="Tabasco">Tabasco</option>
                      <option value="Tamaulipas">Tamaulipas</option>
                      <option value="Tlaxcala">Tlaxcala</option>
                      <option value="Veracruz">Veracruz</option>
                      <option value="Yucatán">Yucatán</option>
                      <option value="Zacatecas">Zacatecas</option>
                    </select>
                  </div>
                  <div className="d-flex justify-content-md-end mb-lg-5">
                    <ButtonAction
                      buttonClass="button-primary font-size-small mt-5"
                      text="Editar datos personales"
                    ></ButtonAction>
                  </div>
                </form>
              </div>
              <div>
                <h4 className="mb-0 mt-5 fw-bold">Sobre tu sitio</h4>
                <form action="#">
                  <div className="mt-1">
                    <h6>Foto de portada</h6>
                    <div className="col-12">
                      <FormFile
                        fileType="image/*"
                        controlId="form-3"
                        // multiple={true}
                        // onChange={handleProductPicsChange}
                      />
                    </div>
                    <div className="d-flex justify-content-md-end">
                      <ButtonAction
                        buttonClass="button-primary font-size-small mt-3"
                        text="Cambiar foto portada"
                      ></ButtonAction>
                    </div>
                  </div>
                </form>
              </div>
              <form action="#">
                <div className="form-group">
                  <div className="mt-5">
                    <label htmlFor="storeName">Nombre de tu tienda</label>
                    <input
                      type="text"
                      className="form-control primary_input shadow-none mt-1"
                      name="surname"
                      id="surname"
                      placeholder="www.artetopia.com/tu-tienda"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="description">
                      Agrega una descripción sobre ti o tu tienda de artesanías
                    </label>
                    <textarea
                      type="text"
                      className="form-control primary_input shadow-none mt-1"
                      name="description"
                      id="description"
                    />
                  </div>
                  <h6 className="mt-3 mb-1">Redes sociales</h6>
                  <div className="d-lg-flex">
                    <div className="mt-2 col-lg-6">
                      <div className="form-group">
                        <label htmlFor="facebook">Facebook</label>
                        <input
                          type="text"
                          className="form-control primary_input shadow-none"
                          name="facebook"
                          id="facebook"
                          placeholder="@"
                        />
                      </div>
                      <div className="form-group">
                        <label className="mt-2" htmlFor="instagram">
                          Instagram
                        </label>
                        <input
                          type="text"
                          className="form-control primary_input shadow-none"
                          name="instagram"
                          id="instagram"
                          placeholder="@"
                        />
                      </div>
                    </div>
                    <div className="mt-2 col-lg-6">
                      <div className="mb-1 form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input
                          type="text"
                          className="form-control primary_input shadow-none"
                          name="twitter"
                          id="twitter"
                          placeholder="@"
                        />
                      </div>
                      <div className="form-group">
                        <label className="mt-2" htmlFor="tiktok">
                          TikTok
                        </label>
                        <input
                          type="text"
                          className="form-control primary_input shadow-none"
                          name="tiktok"
                          id="tiktok"
                          placeholder="@"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3 mb-3">
                    <label htmlFor="city">Selecciona la categoría</label>
                    <select
                      type="text"
                      className="form-select form-select-lg primary_input shadow-none mt-1 craftsman-profile-font-dropdown content-colorSecondary__input"
                      name="category"
                      id="category"
                    >
                      <option value="Bordados">Bordados</option>
                      <option value="Joyería">Joyería</option>
                      <option value="Tejidos">Tejidos</option>
                    </select>
                  </div>
                  <div className="d-flex justify-content-md-end">
                    <ButtonAction
                      buttonClass="button-primary font-size-small mt-3"
                      text="Editar"
                    ></ButtonAction>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftsmanProfile;
