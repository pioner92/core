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

export interface IGetOrganisationByAddressRequest {
  country: string;
  city: string;
  street: string;
  house: string;
  city_id: string;
}

export interface IGetOrganisationByAddressResponse {
  org_id: string;
  successMsgTitle: string;
  successMsgSubtitle: string;
  work_status: boolean;
}
