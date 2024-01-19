import Carousel from 'react-bootstrap/Carousel';
import "./styles.css"
const CarruselTemplateB = ({ img1, img2, img3, img4, img5, img6 })=> {
    return (
        <>
        <div className='d-block d-lg-none'>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    src={img1}
                    className="shadow-1-strong rounded imageCarrusel"
                    alt="Boat on Calm Water"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={img2}
                    className="shadow-1-strong rounded imageCarrusel"
                    alt="Boat on Calm Water"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={img3}
                    className="shadow-1-strong rounded imageCarrusel"
                    alt="Boat on Calm Water"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={img4}
                    className="shadow-1-strong rounded imageCarrusel"
                    alt="Boat on Calm Water"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={img5}
                    className="shadow-1-strong rounded imageCarrusel"
                    alt="Boat on Calm Water"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={img6}
                    className="shadow-1-strong rounded imageCarrusel"
                    alt="Boat on Calm Water"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        </>
    );
}

export default CarruselTemplateB