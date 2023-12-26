import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer } from "./features/auth/slice";
export const store = configureStore({
  reducer: {
    authReducer
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
