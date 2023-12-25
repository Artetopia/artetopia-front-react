import "./styles/app.css";
import "./styles/styles.css";
import Navbare from "./components/navbar";
import Footer from "./components/footer";
import ButtonAction from "./components/buttonAction";

function App() {
  return (
    <>
      <header>
        <Navbare></Navbare>
      </header>

      <section className="p-4">
        <div className="d-flex justify-content-center">
          <img
            className="img-size"
            src="../public/images/craftsmanProfilePicture.png"
            alt="Profile Picture"
          />
        </div>
        <ButtonAction
          buttonClass="button-primary font-size-small mt-3"
          text="Cambiar foto perfil"
        ></ButtonAction>
        <div className="mt-2">
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
              className="form-control primary_input shadow-none input-size mt-1"
              name="prefix"
              id="prefix"
            />
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
            className="form-select form-select-lg primary_input shadow-none mt-1 font-dropdown"
            name="state"
            id="state"
          >
            <option value="Aguascalientes">Aguascalientes</option>
            <option value="Baja California">Baja California</option>
            <option value="Baja California Sur">Baja California Sur</option>
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
        <ButtonAction
          buttonClass="button-primary font-size-small mt-3"
          text="Editar datos personales"
        ></ButtonAction>
        <div>
          <h4 className="mb-0 mt-3">Sobre tu sitio</h4>
          <p>Foto de portada</p>
          <ButtonAction
            buttonClass="button-primary font-size-small mt-3"
            text="Cambiar foto portada"
          ></ButtonAction>
        </div>
        <div className="mt-3">
          <label htmlFor="storeName">Nombre de tu tienda</label>
          <input
            type="text"
            className="form-control primary_input shadow-none mt-1"
            name="surname"
            id="surname"
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
        <div className="mt-2">
          <div>
            <h6 className="mt-3 mb-1">Redes sociales</h6>
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              className="form-control primary_input shadow-none"
              name="facebook"
              id="facebook"
              placeholder="@"
            />
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
          <div>
            <label className="mt-3" htmlFor="city">
              Selecciona la categoría
            </label>
            <select
              type="text"
              className="form-select form-select-lg primary_input shadow-none mt-1 font-dropdown"
              name="category"
              id="category"
            >
              <option value="Bordados">Bordados</option>
              <option value="Joyería">Joyería</option>
              <option value="Tejidos">Tejidos</option>
            </select>
            <input
              type="text"
              className="form-control primary_input shadow-none mt-2"
              name="categories"
              id="categories"
            />
          </div>
        </div>
        <ButtonAction
          buttonClass="button-primary font-size-small mt-3"
          text="Editar"
        ></ButtonAction>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
