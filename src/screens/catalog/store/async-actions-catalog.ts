import {asyncActionCreator} from '../../../system/store/action-creator';
import {RequestCatalog} from '../api/request-catalog';
import {TGetBannerListResponse} from '../types/types';
import {
  IGetCategoriesRequest,
  IGetCategoriesResponse,
  IGetHomepageDataRequest,
  IGetHomepageDataResponse,
  IGetProductsRequest,
  IGetProductsResponse,
} from '../api/types';

export class AsyncActionsCatalog {
  static getBanners = asyncActionCreator<void, TGetBannerListResponse, Error>(
    'CATALOG/GET_BANNERS_LIST',
    RequestCatalog.getBanners,
  );
  static getProducts = asyncActionCreator<
    IGetProductsRequest,
    IGetProductsResponse,
    Error
  >('CATALOG/GET_PRODUCTS', RequestCatalog.getProducts);

  static getCategories = asyncActionCreator<
    IGetCategoriesRequest,
    IGetCategoriesResponse,
    Error
  >('CATALOG/GET_CATEGORIES', RequestCatalog.getCategories);

  static getHomepageData = asyncActionCreator<
    IGetHomepageDataRequest,
    IGetHomepageDataResponse,
    Error
  >('CATALOG/GET_HOMEPAGE_DATA', RequestCatalog.getHomepageData);
}
