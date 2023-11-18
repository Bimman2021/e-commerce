import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const carrierSlice = createSlice({
  name: "carrier",
  initialState,
  reducers: {
    setCarrier: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setCarrier } = carrierSlice.actions;
export default carrierSlice.reducer;
