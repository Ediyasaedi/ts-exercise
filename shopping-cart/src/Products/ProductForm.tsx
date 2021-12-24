import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store.hooks";
import {
  addProduct,
  addProductAsync,
  getErrorMessage,
  Product,
} from "./products.slice";

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    price: 0,
  });

  const errorMessage = useSelector(getErrorMessage);

  const dispatch = useAppDispatch();

  const { id, title, price } = product;
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProductAsync(product));
    setProduct({
      id: "",
      title: "",
      price: 0,
    });
  };
  return (
    <>
      <h2>Add game to the store</h2>
      {errorMessage && <span>error: {errorMessage}</span>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Game title"
          name="title"
          value={title}
          onChange={handleChange}
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={handleChange}
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
        />
        <input
          type="text"
          placeholder="Id"
          name="id"
          value={id}
          onChange={handleChange}
          style={{ border: errorMessage ? "1px solid red" : "1px solid black" }}
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default ProductForm;
