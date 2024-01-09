import { IAuthReducer } from "./reducers/auth";
import { IProductsReducer } from "./reducers/products";

export interface IStore {
  auth: IAuthReducer,
  products: IProductsReducer
}