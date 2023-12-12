export type UserState = {
    userId: string;
    role: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    email: string;
    phoneNumber?: string;
    hashPassword: string;
    headOfSever?: { server: string; createAt: string };
    dateOfBirth?: string;
    verified: boolean;
    storyNow?: { content: string; dateOfStory: string };
    stories?: {story: string}[];
    banned?: boolean;
    friends?: { user: string; createAt: string }[];
    token: string
  };