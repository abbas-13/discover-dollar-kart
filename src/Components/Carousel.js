import { useEffect, useState } from "react";

import "./Carousel.css";

export const Carousel = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval, activeIndex]);

  return (
    <div className="carousel-container">
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          &#8637;
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          &#8641;
        </div>

        <img
          className="slide"
          aria-label="Description of the overall image"
          src={images[activeIndex]}
        />
      </div>
    </div>
  );
};
