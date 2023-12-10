import "./styles/app.scss";
//import bgArtesano from './assets/bgArtesano.png'
import HeaderComponent from "./components/header";
import Footer from './components/footer';
import MultiStepForm from "./components/Multistep/Multistep";
import DashboardClient from "./pages";
function App() {
  const categories = ['Accesorios', 'Ropa', 'Bolsas', 'Mantel', 'Textil'];

  return (
    <>
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    {/* <MultiStepForm/> */}
    <DashboardClient 
      websiteName='ARTE | SANO'
      // profilePic={zapateroImage}
      rate='4'
      categories={categories}
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
