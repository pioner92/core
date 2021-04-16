import {ICityItem, IOrderTypesItem, IOrganisation} from '../types/types';
import {
  IAddressItemResponse,
  IGetOrganisationByAddressResponse,
} from '../api/types';

export interface IStoreDelivery {
  isLoading: boolean;
  error: boolean;
  currentAddress: IAddressItemResponse;
  addressList: IAddressItemResponse[];
  cities: ICityItem[];
  organisations: IOrganisation[];
  selectedOrganisationId: string;
  selectedCityId: string;
  orderTypes: IOrderTypesItem[];
  selectedOrderTypeId: string;
  getOrganisationResult: IGetOrganisationByAddressResponse;
}

export const initialStateDelivery: IStoreDelivery = {
  isLoading: false,
  error: false,
  currentAddress: {} as IAddressItemResponse,
  addressList: [],
  cities: [],
  organisations: [],
  selectedOrganisationId: '',
  selectedCityId: '',
  orderTypes: [],
  selectedOrderTypeId: '-1',
  getOrganisationResult: {} as IGetOrganisationByAddressResponse,
};
