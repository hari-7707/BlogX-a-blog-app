import { createSlice } from "@reduxjs/toolkit";

const authenSlice = createSlice({
  name: "authentication",
  initialState: {
    status: false,
    userData: null,
  },
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authenSlice.actions;

export default authenSlice.reducer;
