import { useState } from "react";
import "./index.css";

// 🐨
// to fix the Total component so that the total price updates correctly whenever a new item is added to the shopping cart.

function Exercise3() {
  const [shopingCart, setShoppingCart] = useState([
    { id: 1, product: "Sock", price: 250 },
    { id: 2, product: "Racket", price: 8000 },
    { id: 3, product: "T-shirt", price: 3000 },
  ]);
  return (
    <div>
      <h1>Exercise 3: Fix Total Price Calculation</h1>
      <ul>
        {shopingCart.map((product) => (
          <li key={product.id}>
            {product.product} x{product.amount} {`฿${product.price}`}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setShoppingCart([
            ...shopingCart,
            {
              id: shopingCart.length + 1,
              product: "Boxing pant",
              price: Math.floor(Math.random() * 2000),
            },
          ]);
        }}
      >
        Add Boxing pant to cart
      </button>
      <Total
        price={shopingCart.reduce((total, product) => total + product.price, 0)} // we can optimize this function to calculate only new value
      />
    </div>
  );
}

function Total({ price }) {
  // const [totalPrice, setTotalPrice] = useState(price);
  // return <div>Total Price: ฿{totalPrice}</div>;
  return <div>Total Price: ฿{price}</div>
}

export default Exercise3;
