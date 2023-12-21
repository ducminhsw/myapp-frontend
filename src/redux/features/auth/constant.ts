export interface IUserCredential {
  role: string;
  userId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  friends: any[];
  phoneNumber: string;
  underServer: string;
  headOfServer: string;
  dateOfBirth: string;
  stories: any[];
  token: string;
}

export interface AuthState {
  loading: boolean;
  loggedSuccess: boolean;
  failedTimes: number;
  userCredentials: IUserCredential | {};
}
