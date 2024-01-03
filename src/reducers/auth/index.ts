import { createSlice } from "@reduxjs/toolkit"
import { IAuthReducer, ICurrentUser, ILoginPayload } from "../../types/auth";
import { IActionWithPayload } from "../../types/common/reducer";


const initialState = {
  isFetching: false,
  isAuthenticated: false,
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
    loginRequest: (state: IAuthReducer, _action: IActionWithPayload<ILoginPayload>) => {
      state.isFetching = true;
      state.error = "";
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
    }

  }
});

export const { loginRequest, loginResponse, loginFailure } = authSlice.actions;
export const authReducer = authSlice.reducer; 