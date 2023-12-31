export interface IUserBasicInfo {
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
  userBasicInfo: IUserBasicInfo | Record<string, string>;
}
