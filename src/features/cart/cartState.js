import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cart",
  default: [],
});

export const addToCart = (cart, item) => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((X) => X.id === item.id);

  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1,
    };
    return newCart;
  }

  newCart.push({
    id: item.id,
    product: item,
    quantity: 1,
  });
  return newCart;
};

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  },
});
