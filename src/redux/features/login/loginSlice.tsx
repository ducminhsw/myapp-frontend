import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleUserLogin } from "../../../services/authService";
import { AppDispatch } from "../../store";
export interface LoginState {
  isLogin: boolean;
}
const initialState: LoginState = {
  isLogin: false,
};

export const handleLoginRedux = createAsyncThunk(
  "login/handleLogin",
  async (
    data: { email: string; password: string },
    { dispatch }: { dispatch: AppDispatch }
  ) => {
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
    builder.addCase(handleLoginRedux.fulfilled, (state, action) => {
      state.isLogin = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, handleLogout } = loginSlice.actions;

export default loginSlice.reducer;
