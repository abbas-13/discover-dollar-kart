import { useContext } from "react";

import { Carousel } from "../Components/Carousel";
import { ProductItem } from "../Components/ProductItem";
import { Context } from "../Context";

import "./Homepage.css";

export const Homepage = () => {
  const { products } = useContext(Context);
  const images = products?.map((product, index) => product.image);

  const randomImages = getRandomImages(images, 5);

  return (
    <>
      <div className="first-container">
        <Carousel images={randomImages} />
      </div>
      <div style={{ padding: "2rem", marginTop: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          {products.map((item) => (
            <ProductItem product={item} />
          ))}
        </div>
      </div>
    </>
  );
};
const getRandomImages = (imagesArray, count) => {
  const shuffledArray = imagesArray.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, count);
};
