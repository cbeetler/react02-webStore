import React, { useState, useEffect } from "react";
// import ProductsList from "./ProductsList.jsx";
// import AddProductForm from "./AddProductForm.jsx";
import Product from "./Product.jsx";
import Loader from "./Loader.jsx";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-tutorial-demo.firebaseio.com/products.json")
      .then((resolve) => resolve.json())
      .then((data) => {
        if (data) {
          setProducts(data);
          console.log("products ", products);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="store-front">
        {isLoading && <Loader />}
        {products.map((product) => (
          <Product key={product.id} details={product} />
        ))}
      </div>
    </>
  );
}
