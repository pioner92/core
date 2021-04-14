import {ApiService} from '../../../system/api/api-service';
import {TGetBannerListResponse} from '../types/types';
import {
  IGetCategoriesResponse,
  IGetHomepageDataRequest,
  IGetHomepageDataResponse,
  IGetProductsRequest,
  IGetProductsResponse,
} from './types';

export class RequestCatalog {
  static getBanners(): Promise<TGetBannerListResponse> {
    return ApiService.post('/api/promotions/getPromotions');
  }
  static getProducts(data: IGetProductsRequest): Promise<IGetProductsResponse> {
    return ApiService.post('/products.json', data);
  }

  static getCategories(): Promise<IGetCategoriesResponse> {
    return ApiService.get('/catalogs.json');
  }

  static getHomepageData(
    data: IGetHomepageDataRequest,
  ): Promise<IGetHomepageDataResponse> {
    return ApiService.post('/homepage.json', data);
  }
}
