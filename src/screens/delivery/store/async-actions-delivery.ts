import {asyncActionCreator} from '../../../system/store/action-creator';
import {IGetCitiesResponse} from '../types/types';
import {RequestDelivery} from '../api/request-delivery';
import {
  IAddressItemResponse,
  IGetOrganisationsRequest,
  IGetOrganisationsResponse,
  ISaveNewAddressRequest,
} from '../api/types';

export class AsyncActionsDelivery {
  static getCities = asyncActionCreator<void, IGetCitiesResponse, Error>(
    'DELIVERY/GET_CITIES',
    RequestDelivery.getCities,
  );
  static getOrganisations = asyncActionCreator<
    IGetOrganisationsRequest,
    IGetOrganisationsResponse,
    Error
  >('DELIVERY/GET_ORGANISATIONS', RequestDelivery.getOrganisations);

  static saveNewAddress = asyncActionCreator<
    ISaveNewAddressRequest,
    IAddressItemResponse[],
    Error
  >('DELIVERY/SAVE_NEW_ADDRESS', RequestDelivery.saveNewAddress);

  static getUserAddressList = asyncActionCreator<
    void,
    IAddressItemResponse[],
    Error
  >('DELIVERY/GET_USER_ADDRESS_LIST', RequestDelivery.getUserAddressList);
}
