import { Row } from "reactstrap";
import "./styles/styles.css"
import CardsAditionalTB from "../../../components/cards_info_template_b";
import ButtonAction from "../../../components/buttonAction";
import CardsProductB from "../../../components/card_product_t_b";
const TemplateB = () => {

  return (
    <>
      <header>
        <img src="./images/example_portada.png" alt="" className="w-100" />
      </header>
      <main className="pt-2">
        <div className="container">
          <h2 className="saludo_artesano fw-semibold text-center m-3">Hola, soy  <small className="name_artesano">Jose Munguía</small></h2>
          <h4 className="text-template-b text-center pt-3">Soy del estado de Oaxaca me dedicado a la artesanía por toda mi vida, me encantaría que puedan ver, mi arte, y mi proceso que esta en los videos abajo...</h4>
        </div>
        <section className="video">
          <div className="container">
            <video class="w-100" controls loop muted>
              <source src="./video/example_video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        <section className="cards-info-artesano m-3">
          <div className="container">
            <Row lg="3" md="2" sm="1" xs="1" className="text-center">
              <CardsAditionalTB
                background_img="card_materiales"
                title="Materiales"
                text="La madera es un material versátil de artesanos para crear muebles, esculturas y utensilios. Cada pieza de madera tiene su propia historia." />

              <CardsAditionalTB
                background_img="card_historia"
                title="Historia"
                text="Un artesano solitario, tallador de madera, en un pueblo olvidado. Cada día, moldeaba con amor árboles caídos en hermosas figuras. Sus manos rugosas y herramientas antiguas contaban historias en cada tallado." />

              <CardsAditionalTB
                background_img="card_respons"
                title="Responsabilidad"
                text="Sus manos rugosas y herramientas antiguas contaban historias en cada tallado. Su arte trascendía el tiempo, y su obra vivía en la eternidad, testimonio de un artesano apasionado" />
            </Row>
          </div>
        </section>
        <section className="categorias text-center mt-3">
          <div className="container">
            <h2 className="titles fw-semibold">Categorias</h2>
            <div className="w-100">
              <ButtonAction buttonClass="button-primary_category p-1 mt-1 mx-0 mx-lg-2" text="Joyería"></ButtonAction>
              <ButtonAction buttonClass="button-primary_category p-1 mt-1 mx-1 mx-lg-2" text="Textil"></ButtonAction>
              <ButtonAction buttonClass="button-primary_category p-1 mt-1 mx-0 mx-lg-2" text="Accesorios"></ButtonAction>
              <ButtonAction buttonClass="button-primary_category p-1 mt-1 ms-1 mx-lg-2" text="Alfarería"></ButtonAction>
            </div>
          </div>
          <div className="galeria container mt-3">
            <div class="row h-75">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                  src="./images/galery_template_b/g-1.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />

                <img
                  src="./images/galery_template_b/g-2.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                />
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                  src="./images/galery_template_b/g-3.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Mountains in the Clouds"
                />

                <img
                  src="./images/galery_template_b/g-4.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                  src="./images/galery_template_b/g-5.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Waves at Sea"
                />

                <img
                  src="./images/galery_template_b/g-6.png"
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="products mt-3">
          <div className="container">
            <Row lg="3" md="2" sm="1" xs="1">
              <CardsProductB
                photoProfile="./images/profile_card_product.png"
                nameCraftsman="Jose Mungüia.."
                img_product="./images/img_product.png"
                nameProduct="Cuenco de barro"
                desProduct="Cuenco de barro multicolor con patrón indígena ornamentado"
                price="$150"
              ></CardsProductB>
              <CardsProductB
                photoProfile="./images/profile_card_product.png"
                nameCraftsman="Jose Mungüia.."
                img_product="./images/img_product.png"
                nameProduct="Cuenco de barro"
                desProduct="Cuenco de barro multicolor con patrón indígena ornamentado"
                price="$150"
              ></CardsProductB>
              <CardsProductB
                photoProfile="./images/profile_card_product.png"
                nameCraftsman="Jose Mungüia.."
                img_product="./images/img_product.png"
                nameProduct="Cuenco de barro"
                desProduct="Cuenco de barro multicolor con patrón indígena ornamentado"
                price="$150"
              ></CardsProductB>
              <CardsProductB
                photoProfile="./images/profile_card_product.png"
                nameCraftsman="Jose Mungüia.."
                img_product="./images/img_product.png"
                nameProduct="Cuenco de barro"
                desProduct="Cuenco de barro multicolor con patrón indígena ornamentado"
                price="$150"
              ></CardsProductB>
              <CardsProductB
                photoProfile="./images/profile_card_product.png"
                nameCraftsman="Jose Mungüia.."
                img_product="./images/img_product.png"
                nameProduct="Cuenco de barro"
                desProduct="Cuenco de barro multicolor con patrón indígena ornamentado"
                price="$150"
              ></CardsProductB>
              <CardsProductB
                photoProfile="./images/profile_card_product.png"
                nameCraftsman="Jose Mungüia.."
                img_product="./images/img_product.png"
                nameProduct="Cuenco de barro"
                desProduct="Cuenco de barro multicolor con patrón indígena ornamentado"
                price="$150"
              ></CardsProductB>
            </Row>
          </div>
        </section>
      </main>

    </>
  )
}

export default TemplateB;