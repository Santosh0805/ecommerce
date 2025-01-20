
import React from 'react';

function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Address</label>
          <input type="text" />
        </div>
        <div>
          <label>Payment Method</label>
          <select>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button>Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
