import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers';
import {initialStateDelivery, IStoreDelivery} from './store-delivery';
import {AsyncActionsDelivery} from './async-actions-delivery';
import {Success} from 'typescript-fsa';
import {IGetCitiesResponse, IOrderTypesItem} from '../types/types';
import {
  IAddressItemResponse,
  IGetOrganisationByAddressResponse,
  IGetOrganisationsResponse,
} from '../api/types';
import {ActionDelivery} from './action-delivery';

const getCitiesHandlerStarted = (state: IStoreDelivery): IStoreDelivery => {
  return {
    ...state,
    error: false,
    isLoading: true,
  };
};

const getCitiesHandlerDone = (
  state: IStoreDelivery,
  {result}: Success<any, IGetCitiesResponse>,
): IStoreDelivery => {
  return {
    ...state,
    isLoading: false,
    error: false,
    cities: result.towns,
  };
};

const getCitiesHandlerFailed = (state: IStoreDelivery): IStoreDelivery => {
  return {
    ...state,
    error: true,
    isLoading: false,
  };
};
//--------------------
const getOrganisationsHandlerStarted = (
  state: IStoreDelivery,
): IStoreDelivery => {
  return {
    ...state,
    error: false,
    isLoading: true,
  };
};

const getOrganisationsHandlerDone = (
  state: IStoreDelivery,
  {result}: Success<any, IGetOrganisationsResponse>,
): IStoreDelivery => {
  return {
    ...state,
    error: false,
    isLoading: false,
    organisations: result.orgs,
  };
};

const getOrganisationsHandlerFailed = (
  state: IStoreDelivery,
): IStoreDelivery => {
  return {
    ...state,
    error: true,
    isLoading: false,
  };
};
//--------------------
const saveNewAddressHandlerStarted = (
  state: IStoreDelivery,
): IStoreDelivery => {
  return {
    ...state,
    error: false,
    isLoading: true,
  };
};

const saveNewAddressHandlerDone = (
  state: IStoreDelivery,
  {result}: Success<any, IAddressItemResponse[]>,
): IStoreDelivery => {
  return {
    ...state,
    error: false,
    isLoading: false,
    addressList: result,
  };
};

const saveNewAddressHandlerFailed = (state: IStoreDelivery): IStoreDelivery => {
  return {
    ...state,
    error: true,
    isLoading: false,
  };
};

const getUserAddressListHandlerStarted = (
  state: IStoreDelivery,
): IStoreDelivery => {
  return {
    ...state,
    error: false,
    isLoading: true,
  };
};

const getUserAddressListHandlerDone = (
  state: IStoreDelivery,
  {result}: Success<any, IAddressItemResponse[]>,
): IStoreDelivery => {
  return {
    ...state,
    error: false,
    isLoading: false,
    addressList: result,
  };
};

const getUserAddressListHandlerFailed = (
  state: IStoreDelivery,
): IStoreDelivery => {
  return {
    ...state,
    error: true,
    isLoading: false,
  };
};

const setSelectedCityIdHandler = (
  state: IStoreDelivery,
  id: string,
): IStoreDelivery => {
  return {
    ...state,
    selectedCityId: id,
  };
};

const setSelectedOrderTypeIdHandler = (
  state: IStoreDelivery,
  id: string,
): IStoreDelivery => {
  return {
    ...state,
    selectedOrderTypeId: id,
  };
};

const setSelectedOrganisationIdHandler = (
  state: IStoreDelivery,
  id: string,
): IStoreDelivery => {
  return {
    ...state,
    selectedOrganisationId: id,
  };
};

const getOrderTypesHandlerDone = (
  state: IStoreDelivery,
  {result}: Success<any, IOrderTypesItem[]>,
): IStoreDelivery => {
  return {
    ...state,
    orderTypes: result,
  };
};

const getOrganisationByAddressHandlerDone = (
  state: IStoreDelivery,
  {result}: Success<any, IGetOrganisationByAddressResponse>,
): IStoreDelivery => {
  return {
    ...state,
  };
};

export const reducerDelivery: ReducerBuilder<IStoreDelivery> = reducerWithInitialState(
  initialStateDelivery,
)
  .case(AsyncActionsDelivery.getCities.async.started, getCitiesHandlerStarted)
  .case(AsyncActionsDelivery.getCities.async.done, getCitiesHandlerDone)
  .case(AsyncActionsDelivery.getCities.async.failed, getCitiesHandlerFailed)
  //--------------------
  .case(
    AsyncActionsDelivery.getOrganisations.async.started,
    getOrganisationsHandlerStarted,
  )
  .case(
    AsyncActionsDelivery.getOrganisations.async.done,
    getOrganisationsHandlerDone,
  )
  .case(
    AsyncActionsDelivery.getOrganisations.async.failed,
    getOrganisationsHandlerFailed,
  )
  //--------------------
  .case(
    AsyncActionsDelivery.saveNewAddress.async.started,
    saveNewAddressHandlerStarted,
  )
  .case(
    AsyncActionsDelivery.saveNewAddress.async.done,
    saveNewAddressHandlerDone,
  )
  .case(
    AsyncActionsDelivery.saveNewAddress.async.failed,
    saveNewAddressHandlerFailed,
  )
  //--------------------
  .case(
    AsyncActionsDelivery.getUserAddressList.async.started,
    getUserAddressListHandlerStarted,
  )
  .case(
    AsyncActionsDelivery.getUserAddressList.async.done,
    getUserAddressListHandlerDone,
  )
  .case(
    AsyncActionsDelivery.getUserAddressList.async.failed,
    getUserAddressListHandlerFailed,
  )
  //--------------------
  .case(AsyncActionsDelivery.getOrderTypes.async.done, getOrderTypesHandlerDone)
  .case(
    AsyncActionsDelivery.getOrganisationByAddress.async.done,
    getOrganisationByAddressHandlerDone,
  )
  .case(ActionDelivery.setSelectedCityId, setSelectedCityIdHandler)
  .case(ActionDelivery.setSelectedOrderType, setSelectedOrderTypeIdHandler)
  .case(
    ActionDelivery.setSelectedOrganisationId,
    setSelectedOrganisationIdHandler,
  );
