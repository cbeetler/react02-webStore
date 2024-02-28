import React, { useState } from "react";
import Product from "./Product.jsx";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function addProduct(e) {
    e.preventDefault();
    setProducts([
      ...products,
      { id: products.length, name: name, description: description },
    ]);
    setName("");
    setDescription("");
  }

  function deleteItem(product) {
    setProducts(products.filter((p) => p.id !== product.id));
  }

  return (
    <>
      <form onSubmit={addProduct}>
        <div>
          <label htmlFor="input-name">Name</label>
          <input
            id="input-name"
            type="text"
            placeholder="Enter the name"
            className="textfield"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-desc">Description</label>
          <input
            id="input-desc"
            type="text"
            placeholder="Enter the description"
            className="textfield"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation-message">
            {name === "" ? <p>Please enter a name.</p> : null}
            {description === "" ? <p>Please enter a description.</p> : null}
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add product"
            disabled={(name === "") | (description === "")}
          />
        </div>
      </form>
      <div>
        <p hidden={products.length > 0}>Add your first product</p>
      </div>
      <ul className="store-front">
        {products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button
              onClick={() => deleteItem(product)}
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

// previous iteration

// import React, { useState } from "react";
// import Product from "./Product.jsx";

// export default function StoreFront() {
//   // hardcoded products for this project
//   const products = [
//     {
//       name: "Cheese",
//       description: "200g cheese block",
//       image:
//         "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png",
//     },
//     {
//       name: "Milk",
//       description: "1L of milk",
//       image:
//         "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png",
//     },
//   ];
//   return (
//     <div className="store-front">
//       <Product details={products[0]} />
//       <Product details={products[1]} />
//     </div>
//   );
// }
