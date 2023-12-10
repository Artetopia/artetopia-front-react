import "./styles/app.scss";
//import bgArtesano from './assets/bgArtesano.png'
import HeaderComponent from "./components/header";
import Footer from './components/footer';
// import MultiStepForm from "./components/Multistep/Multistep";
import DashboardClient from "./pages";

function App() {
  const website = { 
    name: 'ARTE | SANO',
    profilePic: 'https://img.freepik.com/foto-gratis/florero-pintura-hombre-vista-frontal_23-2149644938.jpg?w=740&t=st=1702256764~exp=1702257364~hmac=04e5c3574d858e57c9a80d7af4d76e807685950d856b190ae64ff59f8f2ac88c',
    rate: '4',
    categories: ['Accesorios', 'Ropa', 'Bolsas', 'Mantel', 'Textil']
  }

  return (
    <>
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    {/* <MultiStepForm/> */}
    <DashboardClient 
      websiteName={website.name}
      profilePic={website.profilePic}
      rate={website.rate}
      categories={website.categories}
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
