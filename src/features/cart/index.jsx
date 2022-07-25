import React from "react";
import CartInfo from "./components/CartInfo";
import ProductList from "./components/ProductList";

export default function Cart() {
  return (
    <div>
      <ProductList />
      <CartInfo />
    </div>
  );
}
