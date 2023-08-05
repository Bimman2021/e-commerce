import { createSlice } from "@reduxjs/toolkit";

const pidSlice = createSlice({
  name: "pidSlice",
  initialState: null,
  reducers: {
    setPid: (_, action) => {
      return action.payload;
    },
  },
});

export const { setPid } = pidSlice.actions;
export default pidSlice.reducer;
