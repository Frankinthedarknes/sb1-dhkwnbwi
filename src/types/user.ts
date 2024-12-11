export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture: {
    hd: string | null;
    thumbnail: string | null;
  };
  credits: number;
  status: UserStatus;
  lastLogin: Date;
  registrationDate: Date;
}

export enum UserStatus {
  ACTIVE = 1,
  INACTIVE = 0,
  SUSPENDED = 2
}

export interface UserPreference {
  id: string;
  userId: string;
  questionId: number;
  answer: string;
  type: string;
}