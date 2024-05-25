import React from "react";

const ProductCard = ({ product }) => {
  const productStyles = {
    position: "relative",
    height: "100%",
    display: "flex",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const imageStyles = {
    width: "auto",
    height: "100%",
    margin: "auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div style={productStyles}>
      <div style={imageStyles}>
        <img src={product.image} alt={product.name} className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-gray-700 font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export const ProductGrid = ({ products }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
