import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

function ComponentCarousel( { files=[], ...rest }) {
  const items = files?.map(file => ({
    src: URL.createObjectURL(file),
    name: file?.name
  }))

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.name}
      >
        <img src={item.src} alt={item.altText} className='image-carousel-container carousel-container '/>
        
      </CarouselItem>
    );
  });
  // En caso de que se borre el ultimo elemento cuando se muestra en el carrousel
  // se usa el index como el del nuevo ultimo elemento
  const currentIndex = activeIndex >= items?.length ? (items?.length -1) : activeIndex;
  return (
    <Carousel
      activeIndex={currentIndex}
      next={next}
      previous={previous}
      {...rest}
    >
      <CarouselIndicators
        items={items}
        activeIndex={currentIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default ComponentCarousel;