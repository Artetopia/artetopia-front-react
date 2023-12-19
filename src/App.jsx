import "./styles/app.scss";
//import bgArtesano from './assets/bgArtesano.png'
import HeaderComponent from "./components/header";
import Footer from './components/footer';
// import MultiStepForm from "./components/Multistep/Multistep";
import ModalFeedback from "./components/ModalFeedback"
function App() {
  const websites = [{ 
    name: 'ARTE | SANO',
    profilePic: 'https://img.freepik.com/foto-gratis/florero-pintura-hombre-vista-frontal_23-2149644938.jpg?w=740&t=st=1702256764~exp=1702257364~hmac=04e5c3574d858e57c9a80d7af4d76e807685950d856b190ae64ff59f8f2ac88c',
  },
  { 
    name: 'ARTESANOS LEON',
    profilePic: 'https://img.freepik.com/foto-gratis/sastre-creativo-trabajando-taller_23-2148970726.jpg?w=740&t=st=1702279290~exp=1702279890~hmac=234009d0e7d4fe552e54f27a6d2efaa680f75e4b09addae1436d0d7959a078a9',
  },
  { 
    name: 'FLOR DE CANELA',
    profilePic: 'https://img.freepik.com/foto-gratis/bodegon-herramientas-ceramica-alfareria_23-2150197287.jpg?w=360&t=st=1702434457~exp=1702435057~hmac=a87e51552a2df4bd5ea943d5d2b2c87cdae059fe60fbe12bef97830145f45490',
  }
]
  return (
    <>
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    {/* <MultiStepForm/> */}
    <ModalFeedback
      websiteName = {websites[0].name}
      profilePic = {websites[0].profilePic}
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
