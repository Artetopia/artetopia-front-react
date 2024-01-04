import "./styles/app.css";
import bgArtesano from './assets/bgArtesano.png'
import HeaderComponent from "./components/header";
import Navbare from "./components/navbar"
import Footer from "./components/footer";
import ButtonAction from "./components/buttonAction";
import CardsAbout from "./components/cards_about";
import CardArtesanoImages from "./components/cardArtesanoImages";
import { Row } from "reactstrap";
import { useEffect, useState } from "react";
import SelectTemplate from "./pages/register_craftsman/select_templates";
import OrderDetail from "./pages/OrderDetail";
import OrdersCraftsman from "./pages/OrdersCraftsman"
import Page3 from "./pages/Page3";
import DeliveryStatus from "./pages/DeliveryStatus"
import DashboardClient from "./pages/Dashboard-cliente"

function App() {
    const showMore = () => {
        if(numberOfItemsArtesano + 3 <= artesanos.length) {
            setNumberOfItemsArtesano(numberOfItemsArtesano + 3);
        } else {
            setNumberOfItemsArtesano(artesanos.length);
        }
      }
  const [artesanos, setArtesanos] = useState([
    {
    id: 1,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 2,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 3,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 4,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 5,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 6,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 7,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {id: 8,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 9,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 10,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 11,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
    {
        id: 12,
      name: "Landon Hunt",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta delectus praesentium, atque quam necessitatibus, quibusdam maxime quaerat tenetur sint quod suscipit neque animi excepturi. Corporis molestiae nemo deserunt magnam.",
      profileImage: "https://randomuser.me/api/portraits/men/64.jpg",
      images: [
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
      ],
    },
  ]);
  const [numberOfItemsArtesano, setNumberOfItemsArtesano] = useState(6);

  return (
    <>
    <header>
      <Navbare></Navbare>
    </header>

    <section id='hero-section'>
    <DashboardClient/>
      <HeaderComponent></HeaderComponent>
    </section>
    
    <section id='about' className="mb-4">
      <h2 className="text-center heading_primary">¿Por qué Artetopia?</h2>
      <div className="container">
        <Row lg="3" md="1" sm="1" xs="1" className="text-center">
            <CardsAbout
              background_img="card_artetopia1"
              title="Autenticidad cultural"
              text="Comprar en un marketplace de artesanos mexicanos te brinda acceso a productos auténticos y representativos de la cultura mexicana."
            />
             <CardsAbout
              background_img="card_artetopia2"
              title="Apoyo a comunidades locales"
              text="Tu compra contribuye al sustento de pequeñas comunidades y familias de artesanos, ayudando a preservar tradiciones y apoyar la economía local."
            />
            <CardsAbout
              background_img="card_artetopia3"
              title="Calidad y exclusividad"
              text="Los productos artesanales mexicanos son reconocidos por su alta calidad y atención al detalle, ofreciendo piezas únicas y exclusivas que no encontrarás en grandes cadenas comerciales."
            />
          </Row>
        </div>
      </section>

      <section id="artesanos">
        <div className="container">
          <div className="row">
            <h2 className="text-center heading_primary">Nuestros artesanos</h2>
            <form>
              <div className="form-group d-flex flex-column align-items-center">
                <label htmlFor="exampleInputEmail1">
                  Filtrar por categoría
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-select input_primary"
                >
                  <option value=""></option>
                  <option value="">Test</option>
                  <option value="">Test1</option>
                </select>
              </div>
            </form>
          </div>
          <div className="row mt-5">
            {artesanos.slice(0, numberOfItemsArtesano).map((artesano) => {
              return (
                <>
                  <div key={artesano.id} className=" col-12 col-md-6 col-lg-4 mb-4">
                    <CardArtesanoImages
                      name={artesano.name}
                      description={artesano.description}
                      profileImage={artesano.profileImage}
                      images={artesano.images}
                    ></CardArtesanoImages>
                  </div>
                </>
              );
            })}
            <div className="text-center">
              <ButtonAction
                buttonClass="button-primary"
                text="Ver más"
                action={showMore}
              ></ButtonAction>
            </div>
          </div>
        </div>
      </section>

      <section
        id="call-to-action"
        className="d-flex justify-content-center mt-5"
      >
        <div className="row bg_secondary p-4 p-md-5 max__width rounded d-flex align-items-center">
          <div className="col-md-8">
            <h3 className="text-white">
              Crea tu propio sitio web facil y rapido desde{" "}
              <strong className="heading_primary">Artetopia</strong> y comienza
              a vender tus artesanias.
            </h3>
          </div>
          <div className="col-md-4 text-center">
            <ButtonAction
              buttonClass="button-primary"
              text="Registrate"
            ></ButtonAction>
          </div>
        </div>
      </section>
            
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
