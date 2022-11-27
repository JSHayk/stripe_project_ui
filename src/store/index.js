import { configureStore } from "@reduxjs/toolkit";
// Slices
import productsReducer from "./slices/products-slice/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
