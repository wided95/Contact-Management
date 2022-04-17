import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
      user:userSlice,
      contact:contactSlice,
  },
});
