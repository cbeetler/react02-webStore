import React, { useState } from "react";

export default function Product(props) {
  const { name, description, image } = props.details;
  const [count, setCount] = useState(0);

  function handleIncrementClick() {
    setCount(count + 1);
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="product">
        <img width="50" alt="" src={image} />
        <div className="product-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="product-buttons">
          <button
            onClick={handleDecrementClick}
            disabled={count === 0}
            className="product-sub"
          >
            -
          </button>
          <h3 className="product-count">{count > 0 ? count : ""}</h3>
          <button onClick={handleIncrementClick} className="product-add">
            +
          </button>
        </div>
      </div>
    </>
  );
}
