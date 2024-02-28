import { configureStore } from "@reduxjs/toolkit";

import authenReducer from "./Slices/AuthenSlice";

const store = configureStore({
  reducer: {
    authen: authenReducer,
  },
});

export default store;
