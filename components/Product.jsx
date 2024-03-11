import React, { useState } from "react";

export default function Product(props) {
  const [count, setCount] = useState(0);
  const { details } = props;

  function handleIncrementClick() {
    setCount(count + 1);
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  if (!details) {
    return null;
  }

  return (
    <>
      <div className="product">
        {<img width="50" alt="" src={details.image} />}
        <div className="product-info">
          <h2>{details.name}</h2>
          <p>{details.description}</p>
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
