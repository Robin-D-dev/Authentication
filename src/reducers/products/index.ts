import { createSlice } from "@reduxjs/toolkit"
import { IProductsReducer, IproductList } from "../../types/reducers/products";
import { IActionWithPayload } from "../../types/common/reducer";


const initialState = {
  isFetching: false,
  data: [],
  error: ""
}


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productRequest: (state: IProductsReducer) => {
      state.isFetching = true;
      state.error = "";
    },
    productResponse: (state: IProductsReducer, action: IActionWithPayload<IproductList[]>) => {
      state.isFetching = false;
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
