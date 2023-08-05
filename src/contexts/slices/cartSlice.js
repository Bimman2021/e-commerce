import { createSlice } from "@reduxjs/toolkit";
// import { getCookie } from "../../config/useCookie";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (_, action) => {
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
