import React, { useState } from "react";
import ButtonAction from "../../components/buttonAction";
import Imagen1 from "../../../public/imagen1.png";
import Imagen2 from "../../../public/imagen2.jpeg";
import Imagen3 from "../../../public/imagen3.jpeg";
import Imagen6 from "../../../public/imagen6.png";
import "./styles.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ImageGallery = () => {
  const images = [Imagen1, Imagen2, Imagen3, Imagen3,Imagen1,Imagen1]; //

  // State to keep track of the current main image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle click on a small image
  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="container">
        <section className="d-flex justify-content-start align-items-center">
          <img src={Imagen6} alt="user_image" className=" ml-2 mr-2 user_image" />
          <h1 className="ml-2 username_tittle">Jose Mungüia</h1>
        </section>
        <div className="text-white section_product container w-100">
          <div className="row container">
            <section className="col-12 col-lg-8">
              <h2 className="">Juego de vasos y jarra</h2>
              <h6 className="mb-4 mb-lg-1">
                Juego de vasos en hechos en barro pintados con diseño
                artesanal mexicano
              </h6>

              <img
                src={images[currentIndex]}
                alt="Main Viewfinder"
                className="main-image w-100"
              />
              <section className="d-none d-lg-flex align-items-lg-center">
                <h2 className="fw-bold m-2">$450</h2>
                <ButtonAction
                  text="Comprar"
                  icon={faCartShopping}
                  type="button"
                  buttonClass="button-primary ml-4"
                ></ButtonAction>
              </section>

            </section>


            <div
              className="d-flex flex-lg-column align-items-lg-center col-lg-4 section_product_carrusel"
              style={{
                overflowX: "scroll",
                overflowY: "scroll",
                whiteSpace: "nowrap",
                marginTop: "10px",
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  // style={{ width: '100px', height: '100px', cursor: 'pointer', marginRight: '5px' }}
                  onClick={() => handleImageClick(index)}
                  className="carrousel-image"
                />
              ))}
            </div>
            <section className="d-flex d-lg-none justify-content-center mt-4">
              <h2 className="fw-bold m-2">$450</h2>
              <ButtonAction
                text="Comprar"
                icon={faCartShopping}
                type="button"
                buttonClass="button-primary  ml-4"
              ></ButtonAction>
            </section>

          </div>
        </div >
      </div >
    </>
  );
};

export default ImageGallery;
