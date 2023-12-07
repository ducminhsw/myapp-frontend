import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice";
import userReducer from "./features/user/userSlice";
import thunk from "redux-thunk";
export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
