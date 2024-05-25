import { useContext } from "react";
import { Carousel } from "../Components/Carousel";
import { ProductGrid } from "../Components/ProductItem";
import { Context } from "../Context";

export const Homepage = () => {
  const { products } = useContext(Context);
  const images = products?.map((product) => product.image);

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  const productGridStyle = {
    width: "250px",
    height: "250px",
    margin: "0 auto",
  };

  const randomImages = getRandomImages(images, 5);

  return (
    <div>
      <div style={containerStyles}>
        <Carousel images={randomImages} />
      </div>
      <div style={productGridStyle}>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};
const getRandomImages = (imagesArray, count) => {
  const shuffledArray = imagesArray.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, count);
};
