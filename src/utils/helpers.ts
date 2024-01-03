import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAPIParams, IDefaultHeader } from "../types/common/api";
import { store } from "../store";



export const apiCall = async (apiParams: IAPIParams) => {
  try {
    const url = apiParams.apiPath;
    const requestParams: AxiosRequestConfig | any = {
      url,
      method: apiParams.action,
      data: apiParams.data,
      headers: apiParams.headers,
      params: apiParams.params
    }
    const response: any = await axios(requestParams)
      .then((res: AxiosResponse<any>) => res)
      .catch((error) => { throw Error(error) });

    return response;
  } catch (error) {
    throw Error(JSON.stringify(error));
  }
}

export const defaultHeader = (): IDefaultHeader => {
  const token: string = store.getState().auth.currentUser.token;
  const headers: IDefaultHeader = {
    "Content-Type": "application/json"
  }
  if (token !== "") {
    headers.Authorization = token;
  }
  return headers;
}