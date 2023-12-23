import React, { useState } from 'react';
import Imagen1 from '../../../public/imagen1.png';
import Imagen2 from '../../../public/imagen2.jpeg';
import Imagen3 from '../../../public/imagen3.jpeg';
import Imagen6 from '../../../public/imagen6.png';
import Carrito from '../../../public/carrito.svg';
import "./styles.css"

const ImageGallery = () => {
  const images = [Imagen1, Imagen2, Imagen3];  // 

  // State to keep track of the current main image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle click on a small image
  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (

    <>
    <div className="container">
          <section className='username'>
        <img src={Imagen6} alt="user_image" className='user_image' />
        <h1 className='username_tittle'>Jose Mungüia</h1>
    </section>
    
    <div className='card_flex'>
    <section className='section_product'>
    <div style={{ textAlign: 'center' }}>
      {/* Main Viewfinder */}
    <div className='flex-changes'>
       <section className='title-image-text'>
       <h2 className='product_title'>Juego de vasos y jarra</h2>
       <p className='paragraph'>Juego de vasos en hechos en barro pintados con diseño artesanal mexicano </p>
      <div>
        <img src={images[currentIndex]} alt="Main Viewfinder" className='main-image' />
      </div>
      </section>

      {/* Small Images Carousel */}
      <div  className="carousel-flex" style={{ overflowX: 'scroll', whiteSpace: 'nowrap', marginTop: '10px'}}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Small Image ${index + 1}`}
            // style={{ width: '100px', height: '100px', cursor: 'pointer', marginRight: '5px' }}
            onClick={() => handleImageClick(index)}
            className='carrousel-image'
          />
        ))}
      </div>

    </div>

      <section className='call-to-action'>
      <h3 className='price'>$450</h3>
      
      <div className='button-comprar'>
      <button className='comprar'><img src={Carrito} className='carrito'></img>Comprar</button>
      </div>
      </section>
      

    </div>

    </section>
    </div>
    </div>

    </>
  );
};

export default ImageGallery;




