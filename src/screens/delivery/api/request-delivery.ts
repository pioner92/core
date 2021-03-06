import {ApiService} from '../../../system/api/api-service';
import {
  IAddressItem,
  IGetCitiesResponse,
  IOrderTypesItem,
} from '../types/types';
import {
  IAddressItemResponse,
  IGetOrganisationByAddressRequest,
  IGetOrganisationByAddressResponse,
  IGetOrganisationsRequest,
  IGetOrganisationsResponse,
} from './types';

export class RequestDelivery {
  static getCities(): Promise<IGetCitiesResponse> {
    return ApiService.get('/api/organizations/getCities');
  }
  static getOrganisations(
    data: IGetOrganisationsRequest,
  ): Promise<IGetOrganisationsResponse> {
    return ApiService.get('/api/organizations/getOrganizations', {
      params: data,
    });
  }
  static saveNewAddress(data: IAddressItem): Promise<IAddressItemResponse[]> {
    return ApiService.post('/api/user/saveUserAddress', data);
  }
  static getUserAddressList(): Promise<IAddressItemResponse[]> {
    return ApiService.post('/api/user/getUserAddress');
  }

  static getOrderTypes(): Promise<IOrderTypesItem[]> {
    return ApiService.get('/api/info/getOrderTypes');
  }

  static getOrganisationByAddress(
    data: IGetOrganisationByAddressRequest,
  ): Promise<IGetOrganisationByAddressResponse> {
    return ApiService.get('/api/organizations/getOrganizationByAddress', {
      params: data,
    });
  }
}
