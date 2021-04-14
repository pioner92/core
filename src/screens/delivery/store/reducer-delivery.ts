import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers';
import {initialStateDelivery, IStoreDelivery} from './store-delivery';
import {AsyncActionsDelivery} from './async-actions-delivery';
import {Success} from 'typescript-fsa';
import {IGetCitiesResponse} from '../types/types';
import {IAddressItemResponse, IGetOrganisationsResponse} from '../api/types';

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
  );
