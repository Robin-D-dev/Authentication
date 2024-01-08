import { createSlice } from "@reduxjs/toolkit"
import { IAuthReducer, ICurrentUser, ILoginPayload } from "../../types/reducers/auth";
import { IActionWithPayload } from "../../types/common/reducer";


const initialState = {
  isFetching: false,
  isAuthenticated: false,
  userInfo: {},
  currentUser: {
    token: "",
    email: ""
  },
  error: ""
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state: IAuthReducer, action: IActionWithPayload<ILoginPayload>) => {
      state.isFetching = true;
      state.error = "";
      state.userInfo = action.payload;
    },
    loginResponse: (state: IAuthReducer, action: IActionWithPayload<ICurrentUser>) => {
      state.isFetching = false;
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      state.error = "";
    },
    loginFailure: (state: IAuthReducer, action: IActionWithPayload<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logout: (state: IAuthReducer) => {
      state.isAuthenticated = false;
      state.currentUser = initialState.currentUser;
    }

  }
});

export const { loginRequest, loginResponse, loginFailure, logout } = authSlice.actions;
export const authReducer = authSlice.reducer; 