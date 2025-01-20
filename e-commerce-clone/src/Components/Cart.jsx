
import React from 'react';

function Cart() {
  // This is a placeholder. You will need to implement state management to store cart items.
  const cartItems = [];

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price} USD
              <button>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
