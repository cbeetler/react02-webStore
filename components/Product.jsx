import { useState } from "react";

export default function Product() {
  return (
    <div className="product">
      <img width="50" alt="" />
      <div className="product-info">
        <h2>Name</h2>
        <p>Description</p>
      </div>
      <div className="product-buttons">
        <button className="product-sub">-</button>
        <h3 className="product-count">0</h3>
        <button className="product-add">+</button>
      </div>
    </div>
  );
}
