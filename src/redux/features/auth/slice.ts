import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./constant";
import {
  ISignInRequest,
  ISignUpRequest,
  signInRequest,
  signUpRequest,
} from "../../../services/api/auth-api";

const initialAuthState: AuthState = {
  loading: false,
  failedTimes: 0,
  loggedSuccess: false,
  userCredentials: {},
};

export const handleSignUpRequest = createAsyncThunk(
  "auth/register",
  async ({
    email,
    password,
    username,
    firstName,
    lastName,
    dateOfBirth,
  }: ISignUpRequest) => {
    const response = await signUpRequest({
      email,
      password,
      username,
      firstName,
      lastName,
      dateOfBirth,
    });
    return response;
  }
);

export const handleSignInRequest = createAsyncThunk(
  "auth/register",
  async ({ email, password }: ISignInRequest) => {
    const response = await signInRequest({
      email,
      password,
    });
    return response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleSignUpRequest.pending, (state, action) => {
        console.log(state, action);
        state.loading = true;
        state.loggedSuccess = false;
        state.userCredentials = {};
      })
      .addCase(handleSignUpRequest.fulfilled, (state, action) => {
        console.log(state, action);
        state.failedTimes = 0;
        state.loading = false;
        state.loggedSuccess = true;
        state.userCredentials = action.payload;
      })
      .addCase(handleSignUpRequest.rejected, (state, action) => {
        console.log(state, action);
        state.failedTimes = state.failedTimes++;
        state.loading = false;
        state.loggedSuccess = false;
        state.userCredentials = {};
      })
      .addCase(handleSignInRequest.pending, (state, action) => {
        console.log(state, action);
        state.loading = true;
        state.loggedSuccess = false;
        state.userCredentials = {};
      })
      .addCase(handleSignInRequest.fulfilled, (state, action) => {
        console.log(state, action);
        state.failedTimes = 0;
        state.loading = false;
        state.loggedSuccess = true;
        state.userCredentials = action.payload;
      })
      .addCase(handleSignInRequest.rejected, (state, action) => {
        console.log(state, action);
        state.failedTimes = state.failedTimes++;
        state.loading = false;
        state.loggedSuccess = false;
        state.userCredentials = {};
      });
  },
});

// Action creators are generated for each case reducer function
export const authReducer = authSlice.reducer;
