import React, { useState, useEffect } from "react";
import ProductsList from "./ProductsList.jsx";
import AddProductForm from "./AddProductForm.jsx";

export default function StoreFront() {
  // restore products state from local storage
  const [products, setProducts] = useState(() => {
    const pValue = localStorage.getItem("products");

    if (pValue) {
      return JSON.parse(pValue);
    } else {
      return [];
    }

    // gets above done in one line but slightly confusing
    // JSON.parse(localStorage.getItem("products")) ?? []
  });

  // other state variables
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // store products state in local storage
  // re-renders when products are added, removed, etc.
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    if (products.length === 0) {
      document.title = "No products";
    } else if (products.length === 1) {
      document.title = "1 product";
    } else {
      document.title = `${products.length} products`;
    }
  }, [products]);

  // when the form is submitted, add new product to the array
  // reset initial form values for new submission
  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("https://api.learnjavascript.online/demo/react/admin/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setProducts([
            ...products,
            { id: products.length, name: name, description: description },
          ]);
          setName("");
          setDescription("");
        }
      })
      .catch((error) => console.error(error));
  }

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleDescriptionChange(newDesc) {
    setDescription(newDesc);
  }

  function handleDeleteItem(product) {
    setProducts(products.filter((p) => p.id !== product.id));
  }

  return (
    <>
      <AddProductForm
        name={name}
        description={description}
        onFormSubmit={handleFormSubmit}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
      />
      <div>
        <p hidden={products.length > 0}>Add your first product</p>
      </div>
      <ProductsList products={products} onDeleteItem={handleDeleteItem} />
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
