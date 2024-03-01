import React from "react";
import Product from "./Product.jsx";

export default function ProductsList(props) {
  const { products } = props;

  return (
    <>
      <ul className="store-front">
        {products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button
              onClick={() => props.onDeleteItem(product)}
              className="btn-outline btn-delete"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
