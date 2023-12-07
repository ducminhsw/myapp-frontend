export type UserCredentials = {
    _id: string;
    role: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    email: string;
    phoneNumber?: string;
    hashPassword: string;
    headOfSever?: { server: string };
    dateOfBirth?: string;
    verified: boolean;
    storyNow?: { content: string; dateOfStory: string };
    stories?: any;
    banned?: boolean;
    friends?: { _id: string; username: string, avatar?: string; }[];
    token: string
  };

export type Props = {
    className?: string;
  };