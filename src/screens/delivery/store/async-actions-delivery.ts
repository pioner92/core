import {asyncActionCreator} from '../../../system/store/action-creator';
import {IGetCitiesResponse, IOrderTypesItem} from '../types/types';
import {RequestDelivery} from '../api/request-delivery';
import {
  IAddressItemResponse,
  IGetOrganisationByAddressRequest,
  IGetOrganisationByAddressResponse,
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

  static getOrderTypes = asyncActionCreator<void, IOrderTypesItem[], Error>(
    'DELIVERY/GET_ORDER_TYPES',
    RequestDelivery.getOrderTypes,
  );

  static getOrganisationByAddress = asyncActionCreator<
    IGetOrganisationByAddressRequest,
    IGetOrganisationByAddressResponse,
    Error
  >(
    'DELIVERY/GET_ORGANISATION_BY_ADDRESS',
    RequestDelivery.getOrganisationByAddress,
  );
}
