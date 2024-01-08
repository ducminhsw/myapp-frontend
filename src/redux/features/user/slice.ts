import { createSlice } from "@reduxjs/toolkit";

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

export const userReducer = userSlice.reducer;
