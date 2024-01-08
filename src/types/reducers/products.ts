
export interface IProductsReducer {
  isFetching: boolean;
  data: IproductList[];
  error: string;
}

export interface IproductList {
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}