import { createSlice } from "@reduxjs/toolkit"
import { IProductsReducer, IproductResponse } from "../../types/reducers/products";
import { IActionWithPayload } from "../../types/common/reducer";


const initialState: IProductsReducer = {
  skip: 0,
  isFetching: false,
  data: {} as IproductResponse,
  error: ""
}


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productRequest: (state: IProductsReducer, action: IActionWithPayload<number>) => {
      state.isFetching = true;
      state.skip = action.payload;
      state.error = "";
    },
    productResponse: (state: IProductsReducer, action: IActionWithPayload<IproductResponse>) => {
      state.isFetching = false;
      console.log("Payload", action.payload);
      state.data = action.payload;
      state.error = "";
    },
    productFailure: (state: IProductsReducer, action: IActionWithPayload<string>) => {
      state.isFetching = false;
      state.data = initialState.data;
      state.error = action.payload;
    }
  }
});


export const { productRequest, productResponse, productFailure } = productSlice.actions;
export const productsRedcuer = productSlice.reducer;
