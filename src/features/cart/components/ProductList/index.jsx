import React from "react";
import { productListState } from "../../productState";
import { useRecoilValue, useRecoilState } from "recoil";
import { addToCart, cartState } from "../../cartState";

export default function ProductList() {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);
  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  };
  return (
    <div>
      <h2>Product List:</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.title}
            <button
              style={{ marginLeft: "1rem" }}
              onClick={handleAddToCart(product)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
