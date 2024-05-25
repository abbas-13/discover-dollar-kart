import { AppShell } from "./Components/Appshell";
import { Homepage } from "./Pages/Homepage";
import { Context } from "./Context";
import { useEffect, useState } from "react";

export const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Context.Provider value={{ products }}>
      <AppShell>
        <Homepage />
      </AppShell>
    </Context.Provider>
  );
};
