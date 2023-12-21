import "./styles/app.scss";
//import bgArtesano from './assets/bgArtesano.png'
import HeaderComponent from "./components/header";
import Footer from './components/footer';
import ModalButtons from "./pages/caftrsman_list-of-products";
function App() {
  return (
    <>
    <ModalButtons></ModalButtons>

    <header>
      {/* <HeaderComponent></HeaderComponent> */}
    </header>

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
