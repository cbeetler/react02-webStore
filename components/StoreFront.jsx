import React, { useState } from "react";
import ProductsList from "./ProductsList.jsx";
import AddProductForm from "./AddProductForm.jsx";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    setProducts([
      ...products,
      { id: products.length, name: name, description: description },
    ]);
    setName("");
    setDescription("");
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
