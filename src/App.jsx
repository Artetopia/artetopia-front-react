import "./styles/app.scss";
//import bgArtesano from './assets/bgArtesano.png'
import HeaderComponent from "./components/header";
import Footer from './components/footer';
// import MultiStepForm from "./components/Multistep/Multistep";
// import Payments from './pages/Payments';
import DeliveryStatus from './pages/DeliveryStatus'
function App() {
  return (
    <>
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    {/* <MultiStepForm/> */}
    {/* <Payments /> */}
    <DeliveryStatus
    guideNumber = '123456789ABCDMX'
    status = 'created'
    />
    <section id='hero-section'>

    </section>

    <section id='about'>

    </section>

    <section id='artesanos'>

    </section>

    <section id='call-to-action'>

    </section>

    <footer>
      <Footer></Footer>
    </footer>
    </>
  )
}

export default App
