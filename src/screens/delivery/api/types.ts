import {IAddressItem, IOrganisation} from '../types/types';

export interface IGetOrganisationsRequest {
  order_type: number;
  id: number;
}
export interface IGetOrganisationsResponse {
  orgs: IOrganisation[];
}

export interface ISaveNewAddressRequest extends IAddressItem {}

export interface IAddressItemResponse extends IAddressItem {
  id: number;
}
