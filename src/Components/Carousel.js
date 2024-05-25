import { useEffect, useState } from "react";

export const Carousel = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
    display: "flex",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const slideStyles = {
    width: "auto",
    height: "100%",
    margin: "auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#9999",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#9999",
    zIndex: 1,
    cursor: "pointer",
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };
  console.log(images[activeIndex]);

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, interval);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [interval, activeIndex]);

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={prevSlide}>
        &#8637;
      </div>
      <div style={rightArrowStyles} onClick={nextSlide}>
        &#8641;
      </div>

      <img
        style={slideStyles}
        aria-label="Description of the overall image"
        src={images[activeIndex]}
      />
    </div>
  );
};
