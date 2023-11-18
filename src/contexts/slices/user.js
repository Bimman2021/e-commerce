import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  credential: {},
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
