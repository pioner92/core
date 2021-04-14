import {IBannerItem, ICategoryItem, IProductItem} from '../types/types';

export interface IGetProductsRequest {
  rest_id: number;
  order_type: number;
  category_id: number;
  page: number;
}
export interface IGetProductsResponse {
  category_title: string;
  count_items: number;
  data: IProductItem[];
}

export interface IGetCategoriesRequest {
  org_id: number;
  order_type: number;
}

export interface IGetCategoriesResponse {
  data: ICategoryItem[];
}

export interface IGetHomepageDataRequest {
  rest_id: number;
  order_type: number;
  page: number;
}

export interface IGetHomepageDataResponse {
  promotions: IBannerItem[];
  products: IProductItem[];
  catalog_first: ICategoryItem[];
  catalog_second: ICategoryItem[];
}
