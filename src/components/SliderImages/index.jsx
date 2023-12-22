import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const SliderImages = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="slider mt-3">
        <FontAwesomeIcon icon={faAngleLeft} className="left-arrow" onClick={prevSlide}/>
        <FontAwesomeIcon icon={faAngleRight} className="right-arrow" onClick={nextSlide}/>
        {slides.map((slide, index) => {
          return (
            <>
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                    <img src={slide.image} alt="producto" className="image" />
                )}
              </div>
            </>
          );
        })};
      </div>
    </>
  );
};
export default SliderImages;
