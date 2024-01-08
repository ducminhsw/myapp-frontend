import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer } from "./features/auth/slice";
import { serverReducer } from "./features/server/slice";
import { channelReducer } from "./features/channel/slice";
import { userReducer } from "./features/user/slice";
export const store = configureStore({
  reducer: {
    authReducer,
    serverReducer,
    channelReducer,
    userReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
