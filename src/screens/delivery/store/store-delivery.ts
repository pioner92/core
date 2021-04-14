import {ICityItem, IOrganisation} from '../types/types';
import {IAddressItemResponse} from '../api/types';

export interface IStoreDelivery {
  isLoading: boolean;
  error: boolean;
  currentAddress: IAddressItemResponse;
  addressList: IAddressItemResponse[];
  cities: ICityItem[];
  organisations: IOrganisation[];
}

export const initialStateDelivery: IStoreDelivery = {
  isLoading: false,
  error: false,
  currentAddress: {} as IAddressItemResponse,
  addressList: [],
  cities: [],
  organisations: [],
};
