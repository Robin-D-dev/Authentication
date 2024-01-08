import { IAuthReducer } from "./reducers/auth";

export interface IStore {
  auth: IAuthReducer,
}