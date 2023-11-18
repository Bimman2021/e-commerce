import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: localStorage.getItem("cis")
    ? JSON.parse(localStorage.getItem("cis"))
    : [],
  reducers: {
    addToCart: (state, action) => {
      const ins = [...state, action.payload];
      localStorage.setItem("cis", JSON.stringify(ins));
      return ins;
    },
    removeFromCart: (_, action) => {
      localStorage.setItem("cis", JSON.stringify(action.payload));
      return action.payload;
    },
    addQty: (state, action) => {
      const { index, qty } = action.payload;
      return (state[index].qty += qty);
    },
    minusQty: (_, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
