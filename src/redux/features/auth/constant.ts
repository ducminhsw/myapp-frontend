export interface IUserCredential {}

export interface AuthState {
  loading: boolean;
  loggedSuccess: boolean;
  failedTimes: number;
  userCredentials: IUserCredential;
}
