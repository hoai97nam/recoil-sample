import React from "react";
import { cartState, cartTotal } from "../../cartState";
import { useRecoilValue } from "recoil";

export default function CartInfo() {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <div>
      <h2>Cart info:</h2>
      <ul className="cart-item">
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.title}: {item.quantity}
          </li>
        ))}
      </ul>
      <h4>Total: {total}</h4>
    </div>
  );
}
