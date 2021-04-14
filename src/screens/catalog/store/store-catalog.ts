import {ICategoryItem, IProductItem, TGetBannerListResponse} from '../types/types';

export interface IStoreCatalog {
  banners: TGetBannerListResponse;
  products: IProductItem[];
  categories: ICategoryItem[];
  error: boolean;
  isLoading: boolean;
}

export const initialStateCatalog: IStoreCatalog = {
  banners: [],
  products: [],
  categories: [],
  error: false,
  isLoading: false,
};
