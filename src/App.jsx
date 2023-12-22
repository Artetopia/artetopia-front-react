import "./styles/app.scss";
import HeaderComponent from "./components/header";
import Footer from './components/footer';
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
function App() {
  return (
    <>
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    {/* <Page3 /> */}
    <Page4 /> 
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
