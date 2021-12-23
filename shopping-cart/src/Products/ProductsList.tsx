import React, { useState } from "react";

interface ProductsListProps {}

const initialProducts = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Hunt: Showdowm", price: 70, id: "hunt" },
  { title: "Hell let Loose", price: 50, id: "hll" },
];

interface Product {
  title: string;
  price: number;
  id: string;
}

const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  return (
    <div>
      <h2>Games List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
        </div>
      ))}
      <button
        onClick={() =>
          setProducts((prevproduct) => [
            ...prevproduct,
            { title: "Half Life", price: 30, id: "hlf" },
          ])
        }
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductsList;
