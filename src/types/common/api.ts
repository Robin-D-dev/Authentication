import { Method } from "axios";


export interface IAPIParams {
  apiPath: string;
  headers: IDefaultHeader;
  action: Method,
  data?: any,
  params?: any;
}

export interface IDefaultHeader {
  "Content-Type": string;
  Authorization?: string;
}