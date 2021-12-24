import React from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../store.hooks";
import {
  getCartProducts,
  getTotalCartPrice,
  removeFromCart,
} from "./cart.slice";

const Cart: React.FC = () => {
  const cartProducts = useAppSelector(getCartProducts);
  const totalPrice = useAppSelector(getTotalCartPrice);
  const dispatch = useAppDispatch();
  const handleRemoveFromcart = (productId: string) =>
    dispatch(removeFromCart(productId));
  return (
    <>
      <h2>Cart</h2>
      <h5>{totalPrice}</h5>
      {cartProducts.map((product) => (
        <div key={product.id}>
          <span>{product.title}</span>
          <span>{product.amount}</span>
          <span>{product.price}</span>
          <button onClick={() => handleRemoveFromcart(product.id)}>
            Remove from cart
          </button>
        </div>
      ))}
    </>
  );
};

export default Cart;
