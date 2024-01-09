
export interface IProductsReducer {
  skip: number;
  isFetching: boolean;
  data: IproductResponse;
  error: string;
}

export interface IproductResponse {
  products: IProduct[],
  limit: number,
  skip: number,
  total: number,
}

export interface IProduct {
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}