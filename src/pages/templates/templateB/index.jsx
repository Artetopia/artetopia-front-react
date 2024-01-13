import { Row } from "reactstrap";
import "./styles/styles.css";
import CardsAditionalTB from "../../../components/cards_info_template_b";
import ButtonAction from "../../../components/buttonAction";
import CardsProductB from "../../../components/card_product_t_b";
import GalleryTemplateB from "../../../components/gallery_template_b";
import CarruselTemplateB from "../../../components/carrusel_template_b";
const TemplateB = () => {
  const addToCart = (product) => {
    console.log("Carrito", product);
  };
  return (
    <>
      <header>
        <img src="./images/example_portada.png" alt="" className="w-100" />
      </header>
      <main className="pt-2">
        <div className="container">
          <h2 className="saludo_artesano fw-semibold text-center m-3">
            Hola, soy <small className="name_artesano">Jose Munguía</small>
          </h2>
          <h4 className="text-template-b text-center pt-3 mb-3">
            Soy del estado de Oaxaca me dedicado a la artesanía por toda mi
            vida, me encantaría que puedan ver, mi arte, y mi proceso que esta
            en los videos abajo...
          </h4>
        </div>
        <section className="video mt-4">
          <div className="container">
             {/* Dependiendo de si tiene video de youtube o video mp4, hay que revisar */}
            {/* <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen
              ></iframe>
            </div> */}
            <video className="w-100" controls loop muted>
              <source src="../video/example_video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        <section className="cards-info-artesano m-3">
          <div className="container">
            <Row lg="3" md="2" sm="1" xs="1" className="text-center">
              <CardsAditionalTB
                background_img="card_materiales"
                title="Materiales"
                text="La madera es un material versátil de artesanos para crear muebles, esculturas y utensilios. Cada pieza de madera tiene su propia historia."
              />
              <CardsAditionalTB
                background_img="card_historia"
                title="Historia"
                text="Un artesano solitario, tallador de madera, en un pueblo olvidado. Cada día, moldeaba con amor árboles caídos en hermosas figuras. Sus manos rugosas y herramientas antiguas contaban historias en cada tallado."
              />

              <CardsAditionalTB
                background_img="card_respons"
                title="Responsabilidad"
                text="Sus manos rugosas y herramientas antiguas contaban historias en cada tallado. Su arte trascendía el tiempo, y su obra vivía en la eternidad, testimonio de un artesano apasionado"
              />
            </Row>
          </div>
        </section>
        <section className="categorias text-center mt-3">
          <div className="container">
            <h2 className="titles fw-semibold">Categorias</h2>
            <div className="w-100 d-flex justify-content-center align-items-center">
              <ButtonAction
                buttonClass="button-primary_category p-1 mt-1 mx-0 mx-lg-2"
                text="Joyería"
                type="button"
              ></ButtonAction>
              <ButtonAction
                buttonClass="button-primary_category p-1 mt-1 mx-1 mx-lg-2"
                text="Textil"
                type="button"
              ></ButtonAction>
              <ButtonAction
                buttonClass="button-primary_category p-1 mt-1 mx-0 mx-lg-2"
                text="Accesorios"
                type="button"
              ></ButtonAction>
              <ButtonAction
                buttonClass="button-primary_category p-1 mt-1 ms-1 mx-lg-2"
                text="Alfarería"
                type="button"
              ></ButtonAction>
            </div>
          </div>
          <div className="galeria container mt-3">
            <GalleryTemplateB 
              img1="../images/galery_template_b/g-1.png"
              img2="../images/galery_template_b/g-2.png"
              img3="../images/galery_template_b/g-3.png"
              img4="../images/galery_template_b/g-4.png"
              img5="../images/galery_template_b/g-5.png"
              img6="../images/galery_template_b/g-6.png"
            ></GalleryTemplateB>
            <CarruselTemplateB
              img1="../images/galery_template_b/g-1.png"
              img2="../images/galery_template_b/g-2.png"
              img3="../images/galery_template_b/g-3.png"
              img4="../images/galery_template_b/g-4.png"
              img5="../images/galery_template_b/g-5.png"
              img6="../images/galery_template_b/g-6.png"
            ></CarruselTemplateB>
          </div>
        </section>
        <section className="products mt-3">
          <div className="container">
            <Row lg="3" md="2" sm="1" xs="1">
              <CardsProductB
                photoProfile="https://wp.revolucion.news/wp-content/uploads/2019/09/artesano.jpeg"
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
  );
};

export default TemplateB;
