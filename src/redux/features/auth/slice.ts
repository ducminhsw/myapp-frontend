import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./constant";
import { RootState } from "../../store";

import {
  ISignInRequest,
  ISignUpRequest,
  ISignUpResponse,
  signInRequest,
  signUpRequest,
} from "../../../services/api/auth-api";
import {
  displayErrorToast,
  displaySuccessToast,
} from "../../../utils/toast-creator";

const initialAuthState: AuthState = {
  loading: false,
  loggedSuccess: false,
  userBasicInfo: {},
};

export const handleSignUpRequest = createAsyncThunk<
  ISignUpResponse,
  ISignUpRequest
>(
  "auth/register",
  async ({
    email,
    displayName,
    password,
    username,
    dateOfBirth,
  }: ISignUpRequest) => {
    try {
      const response = await signUpRequest({
        email,
        password,
        displayName,
        username,
        dateOfBirth,
      });
      response && displaySuccessToast("Register Success");
      return response.data;
    } catch (error) {
      displayErrorToast();
      return undefined;
    }
  }
);

export const handleSignInRequest = createAsyncThunk(
  "auth/login",
  async ({ email, password }: ISignInRequest) => {
    try {
      const response = await signInRequest({
        email,
        password,
      });

      response && displaySuccessToast("Login successfully");
      return response?.data?.data;
    } catch (error) {
      displayErrorToast();
      return undefined;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleSignInRequest.pending, (state) => {
        state.loading = true;
        state.loggedSuccess = false;
        state.userBasicInfo = {};
      })
      .addCase(handleSignInRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedSuccess = true;
        state.userBasicInfo = action!.payload!.userBasicInfo;
      })
      .addCase(handleSignInRequest.rejected, (state, action) => {
        console.log(state, action);
        state.loading = false;
        state.loggedSuccess = false;
        state.userBasicInfo = {};
      });
  },
});

export const authLoading = (state: RootState) => state.authReducer.loading;

export const getUserInfor = (state: RootState) =>
  state.authReducer.userBasicInfo;

// Action creators are generated for each case reducer function
export const authReducer = authSlice.reducer;
