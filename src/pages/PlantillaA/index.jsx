import "./styles.css";
import bgPlantillaA from "/images/bgPlantillaA.png";
import profileImgArtesano from "/images/profileImgArtesano.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SliderImages from "../../components/SliderImages";
import CardProductA from "../../components/CardProductA";
const PlantillaA = () => {
  const SliderData = [
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  return (
    <>
      <div className="position-relative templateA-container">
        <img src={bgPlantillaA} alt="" className="w-100 d-block templateA-image" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mt-4">
              <p className="text-center templateA-description mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit qui consectetur quam magni maxime, fuga ducimus facilis
                aut quasi laborum? Saepe dolorem voluptatem tenetur perspiciatis
                quasi odio sapiente, quas odit?
              </p>
              <div className="d-flex social-media-container justify-content-center mb-3">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="social-primary text-white m-1 border-0"
                  id="facebook"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="social-primary text-white m-1 border-0"
                  id="facebook"
                />
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="social-primary text-white m-1 border-0"
                  id="facebook"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="social-primary text-white m-1 border-0"
                  id="facebook"
                />
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-4 position-absolute profileImg-Container">
              <div className="profileImg-sizeContainer rounded">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded img-fluid profileImg"
                  alt="profileImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <SliderImages slides={SliderData}></SliderImages>
        </div>
        <div className="row d-flex categories-container mt-3 justify-content-center">
          <button
            type="button"
            className="rounded button-primary p-1 mt-1 mx-2"
          >
            Joyería
          </button>
          <button
            type="button"
            className="rounded button-primary p-1 mt-1 mx-2"
          >
            Textil
          </button>
          <button
            type="button"
            className="rounded button-primary p-1 mt-1 mx-2"
          >
            Accesorios
          </button>
          <button
            type="button"
            className="rounded button-primary p-1 mt-1 mx-2"
          >
            Alfalería
          </button>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-lg-4 my-2">
            <CardProductA name="Juegos de vasos y jarra" description="Some quick example text to build on the card title and make up the bulk of the card's content." artesanoName="Camila Altamirano" price="586.00"></CardProductA>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantillaA;
