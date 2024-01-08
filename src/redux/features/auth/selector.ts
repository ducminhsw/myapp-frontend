import { RootState } from "../../store";

export const authLoading = (state: RootState) => state.authReducer.loading;
export const authLoggedSuccess = (state: RootState) =>
  state.authReducer.loggedSuccess;
export const authUserBasicInfo = (state: RootState) =>
  state.authReducer.userBasicInfo;
