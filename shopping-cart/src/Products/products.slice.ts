import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
  title: string;
  price: number;
  id: string;
}

const initialState: Product[] = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Hunt: Showdowm", price: 70, id: "hunt" },
  { title: "Hell let Loose", price: 50, id: "hll" },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [action.payload, ...state];
    },
  },
});

export const { addProduct } = productsSlice.actions;
export const getProductsSelector = (state: RootState) => state.products;
export default productsSlice.reducer;
