
export interface ILoginPayload {
  email?: string;
  password?: string;
}

export interface ICurrentUser {
  id?: string;
  username?: string;
  email: string;
  firstname?: string;
  lastname?: String;
  gender?: string;
  image?: string;
  token: String;
}

export interface IAuthReducer {
  isFetching: boolean;
  isAuthenticated: boolean;
  userInfo: ILoginPayload;
  currentUser: ICurrentUser;
  error: string;
}