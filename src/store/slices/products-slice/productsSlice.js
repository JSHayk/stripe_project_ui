import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, { payload }) {
      state.data = payload;
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
