import React, { useState, useEffect } from "react";
import ProductsList from "./ProductsList.jsx";
import AddProductForm from "./AddProductForm.jsx";
import useFetch from "./useFetch.jsx";
import Loader from "./Loader.jsx";

export default function StoreFront() {
  // state variables
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // useFetch methods
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );
  const { post } = useFetch(
    "https://api.learnjavascript.online/demo/react/admin/"
  );

  // retrieve products from API endpoint
  // re-renders when products are added, removed, etc.
  useEffect(() => {
    // API fetch
    get("products.json")
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));

    // Title update
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

    // API post
    // at the moment this does not work. Products can be added but will not render
    // baseURL: https://api.learnjavascript.online/demo/react/admin/
    // endpoint: products
    // covered in React Tutorial, chapter 64
    post("products", { name: name, description: description })
      .then((data) => {
        console.log(data);
        if (data) {
          setProducts([
            ...products,
            { id: products.length + 1, name: name, description: description },
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
      {loading && <Loader />}
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
