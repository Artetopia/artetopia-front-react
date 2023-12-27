import "./styles/app.css";
import Navbare from "./components/navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/register";
import LoginForm from "./pages/login";
import RegisterArtesanoInfoSite from "./pages/registerArtesanoInfoSite";
import ModalButtons from "./pages/caftrsman_list-of-products";
import DashboardClient from "./pages/Dashboard-cliente";
import DeliveryStatus from "./pages/DeliveryStatus";
import List_products from "./pages/handcraftsman_product-list";
import Step_7 from "./pages/handcraftsman_reg_step-7";
import Step_8 from "./pages/handcraftsman_reg_step-8";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Payments from "./pages/Payments";
import PlantillaA from "./pages/PlantillaA";
import ImageGallery from "./pages/product-carousel/ImageGallery";
import AditionalTemplateB from "./pages/register_craftsman/info-aditional-template-b";
import SelectTemplate from "./pages/register_craftsman/select_templates";
import RegisterArtesanoPersonalInfo from "./pages/registerArtesanoPersonalInfo";
import ShoppingCar from "./pages/shopping_car";
import TemplateB from "./pages/templates/templateB";
import VerifyAccount from "./pages/VerifyAccount";
import Checkout from "./pages/checkout";

import ButtonAction from "./components/buttonAction";

function App() {
  return (
    <>
      <header>
        <Navbare></Navbare>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/verify" element={<VerifyAccount />}></Route>
        <Route path="/craftmans" element={<DashboardClient />}></Route>
        <Route path="/craftmanA" element={<PlantillaA />}></Route>
        <Route path="/craftmanB" element={<TemplateB />}></Route>
        <Route path="/productDetail" element={<ImageGallery />}></Route>
        <Route path="/cart" element={<ShoppingCar />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/delivery"
          element={<DeliveryStatus guideNumber={1234} status="delivered" />}
        ></Route>
        <Route path="/craftman/products" element={<ModalButtons />}></Route>
        <Route path="/craftman/payments" element={<Payments />}></Route>
        {/* Route dashobard artesano perfil */}
        {/* Route dashboard artesano plantilla */}
        {/* Route dashboard artesano mis pedidos */}
        {/* Route dashboard artesano mis pedidos detalle */}
        <Route
          path="/register/personalInfo"
          element={<RegisterArtesanoPersonalInfo />}
        ></Route>
        <Route
          path="/register/siteInfo"
          element={<RegisterArtesanoInfoSite />}
        ></Route>
        <Route path="/register/photos" element={<Page3 />}></Route>
        <Route path="/register/products" element={<Page4 />}></Route>
        <Route
          path="/register/selectTemplate"
          element={<SelectTemplate />}
        ></Route>
        <Route
          path="/register/infoTemplate"
          element={<AditionalTemplateB />}
        ></Route>
        <Route path="/register/payment" element={<Step_7 />}></Route>
        <Route path="/register/complete" element={<Step_8 />}></Route>
      </Routes>

      {/* <form className="p-4 px-md-5 m-md-5">
        <div className="d-flex justify-content-center">
          <img
            className="img-size"
            src="../public/images/craftsmanProfilePicture.png"
            alt="Profile Picture"
          />
        </div>
        <div className="d-flex justify-content-center">
          <ButtonAction
            buttonClass="button-primary font-size-small mt-4"
            text="Cambiar foto perfil"
          ></ButtonAction>
        </div>
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
        <div className="d-flex justify-content-md-end">
          <ButtonAction
            buttonClass="button-primary font-size-small mt-3"
            text="Editar datos personales"
          ></ButtonAction>
        </div>
        <div>
          <h4 className="mb-0 mt-3">Sobre tu sitio</h4>
          <p>Foto de portada</p>
          <div className="d-flex justify-content-md-end">
            <ButtonAction
              buttonClass="button-primary font-size-small mt-3"
              text="Cambiar foto portada"
            ></ButtonAction>
          </div>
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
        <div className="d-lg-flex">
          <div className="mt-2 col-lg-6">
            <div className="mr-lg-5">
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
          </div>
          <div className="col-lg-6 mt-3">
            <label className="mt-4" htmlFor="city">
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
            <textarea
              type="text"
              className="form-control primary_input shadow-none mt-3 categories-selected"
              name="categories"
              id="categories"
            />
          </div>
        </div>
        <div className="d-flex justify-content-md-end">
          <ButtonAction
            buttonClass="button-primary font-size-small mt-3"
            text="Editar"
          ></ButtonAction>
        </div>
      </form> */}
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
