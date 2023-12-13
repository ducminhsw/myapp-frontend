import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleUserLogin } from "../../../services/api/friend-api";
import { AuthState } from "./constant";

export interface LoginState {
  isLogin: boolean;
}

const initialState: LoginState = {
  isLogin: false,
};

export const handleLoginRedux = createAsyncThunk(
  "login/handleLogin",
  async (data: { email: string; password: string }) => {
    const res = await handleUserLogin({
      password: data.password,
      email: data.email,
    });
    res &&
      localStorage.setItem(
        "userCredentials",
        JSON.stringify(res.data?.userCredentials)
      );
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },

    handleLogout: (state) => {
      localStorage.removeItem("userCredentials");
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleLoginRedux.fulfilled, (state) => {
      state.isLogin = true;
    });
  },
});

const initialAuthState: AuthState = {
  loading: false,
  failedTimes: 0,
  loggedSuccess: false,
};

export const handleLoginAction = {};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, handleLogout } = loginSlice.actions;

export default loginSlice.reducer;
