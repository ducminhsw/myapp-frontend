import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./constant";
import { RootState } from "../../store";
import toast from "react-hot-toast";

import {
  ISignInRequest,
  ISignUpRequest,
  ISignUpResponse,
  signInRequest,
  signUpRequest,
} from "../../../services/api/auth-api";

const initialAuthState: AuthState = {
  loading: false,
  failedTimes: 0,
  loggedSuccess: false,
  userCredentials: {},
};

export const handleSignUpRequest = createAsyncThunk<ISignUpResponse | undefined, ISignUpRequest>(
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

      if (response) {
        toast('Register successfully', {
          style: {
            borderRadius: '10px',
            background: '#00FF00',
            color: '#000',
          },
          duration: 1000
        })
      }

      return response.data;
    } catch (error) {
      toast('Something went wrong !', {
        style: {
          borderRadius: '10px',
          background: 'red',
          color: '#fff',
        },
        duration: 1500
      })
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

      if (response) {
        toast('Login successfully', {
          style: {
            borderRadius: '10px',
            background: '#00FF00',
            color: '#000',
          },
          duration: 1500
        })
      }

      return response?.data?.data;
    } catch (error) {

      toast('Something went wrong !', {
        style: {
          borderRadius: '10px',
          background: 'red',
          color: '#fff',
        },
        duration: 1500
      })
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleSignUpRequest.pending, (state, _) => {
        state.loading = true;
        state.loggedSuccess = false;
      })
      .addCase(handleSignUpRequest.fulfilled, (state, _) => {
        state.failedTimes = 0;
        state.loading = false;
        state.loggedSuccess = true;
      })
      .addCase(handleSignUpRequest.rejected, (state, action) => {
        console.log(state, action);
        state.failedTimes = state.failedTimes++;
        state.loading = false;
        state.loggedSuccess = false;
      })
      .addCase(handleSignInRequest.pending, (state, action) => {
        console.log(state, action);
        state.loading = true;
        state.loggedSuccess = false;
        state.userCredentials = {};
      })
      .addCase(handleSignInRequest.fulfilled, (state, action) => {
        state.failedTimes = 0;
        state.loading = false;
        state.loggedSuccess = true;
        state.userCredentials = action?.payload?.userCredentials!;
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

export const authLoading = (state: RootState) => {
  state.authReducer.loading
  state.authReducer.loggedSuccess

  return {
    isLoading: state.authReducer.loading,
    success: state.authReducer.loggedSuccess
  }
};

export const getUserInfor = (state: RootState) => state.authReducer.userCredentials;

// Action creators are generated for each case reducer function
export const authReducer = authSlice.reducer;
