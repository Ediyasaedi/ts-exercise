import { Product } from "./Products/products.slice";

const validateProduct = (product: Product): Promise<Product> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (product.title.length === 0) {
        reject("No Title");
      }
      if (product.price <= 0) {
        reject("Price is incorrect");
      }
      resolve(product);
    }, 3000)
  );

export default validateProduct;
