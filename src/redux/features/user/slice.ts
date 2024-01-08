import { createSlice } from "@reduxjs/toolkit";

interface IUserStoreState {}

const userInitialState = {
  friends: [],
  userInfo: {},
};

export const userSlice = createSlice({
  initialState: userInitialState,
  name: "user",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase;
  },
});
