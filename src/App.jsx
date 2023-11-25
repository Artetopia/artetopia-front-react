import './styles/app.css';
import HeaderComponent from "./components/header";
import Footer from './components/footer';
import React from 'react';
import CardsAbout from './components/cards_about';
import { Row } from 'reactstrap';
function App() {
  return (
    <>
      <header>
        <HeaderComponent></HeaderComponent>
      </header>

      <section id='hero-section'>

      </section>

      <section id='about'>
        <Row lg="3" md="1" sm="1" className="text-center">
          <CardsAbout
            background_img="card_artetopia1"
            title="Autenticidad cultural"
            text="Comprar en un marketplace de artesanos mexicanos te brinda acceso a productos auténticos y representativos de la cultura mexicana." />

          <CardsAbout
            background_img="card_artetopia2"
            title="Apoyo a comunidades locales"
            text="Tu compra contribuye al sustento de pequeñas comunidades y familias de artesanos, ayudando a preservar tradiciones y apoyar la economía local." />


          <CardsAbout
            background_img="card_artetopia3"
            title="Calidad y exclusividad"
            text="Los productos artesanales mexicanos son reconocidos por su alta calidad y atención al detalle, ofreciendo piezas únicas y exclusivas que no encontrarás en grandes cadenas comerciales." />

        </Row>
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

export default App;