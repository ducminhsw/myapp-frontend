// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserState } from "./userSlice.type";
import { setLogin } from "../login/loginSlice";
const initialState: UserState = {
    _id: '',
    role: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    hashPassword: '',
    verified: false,
    token: ''
};
export const setUser = createAsyncThunk(
  'user/setUser',
  async (_, { dispatch }) => {
    let storedData: any = localStorage.getItem("userCredentials");
    if (storedData) {
      storedData = JSON.parse(storedData);
    }
    if (storedData && storedData.token) {
      // Dispatch setLogin action from loginSlice
      dispatch(setLogin());
      return storedData;
    }
    return null;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;
