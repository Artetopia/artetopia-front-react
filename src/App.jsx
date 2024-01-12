import "./styles/app.css";
import Navbare from "./components/navbar";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";

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
import OrdersCraftsman from "./pages/OrdersCraftsman";
import OrderDetail from "./pages/OrderDetail";
import Artesano from "./pages/Artesano";


function App() {
  return (
    <>
      <header>
        <Navbare></Navbare>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/verify" element={<VerifyAccount/>}></Route>
        <Route path="/craftmans" element={<DashboardClient/>}></Route>
        <Route path="/craftmanA" element={<PlantillaA/>}></Route>
        <Route path="/craftmanB" element={<TemplateB/>}></Route>
        <Route path="/productDetail" element={<ImageGallery/>}></Route>
        <Route path="/cart" element={<ShoppingCar/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/delivery" element={<DeliveryStatus guideNumber={1234} status="delivered"/>}></Route>
        <Route path="/craftman/products" element={<ModalButtons/>}></Route>
        <Route path="/craftman/payments" element={<Payments/>}></Route>
        {/* Route dashobard artesano perfil */}
        {/* Route dashboard artesano plantilla */}
        <Route path="/craftman/orders" element={<OrdersCraftsman/>}></Route>
        <Route path="/craftman/orderDetail" element={<OrderDetail/>}></Route>
        <Route path="/register/personalInfo" element={<RegisterArtesanoPersonalInfo/>}></Route>
        <Route path="/register/siteInfo" element={<RegisterArtesanoInfoSite/>}></Route>
        <Route path="/register/photos" element={<Page3/>}></Route>
        <Route path="/register/products" element={<Page4/>}></Route>
        <Route path="/register/selectTemplate" element={<SelectTemplate/>}></Route>
        <Route path="/register/infoTemplate" element={<AditionalTemplateB/>}></Route>
        <Route path="/register/payment" element={<Step_7/>}></Route>
        <Route path="/register/complete" element={<Step_8/>}></Route>
        <Route path="/craftman" element={<Artesano/>}></Route>
      </Routes>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
