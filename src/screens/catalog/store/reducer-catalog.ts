import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers';
import {IStoreCatalog, initialStateCatalog} from './store-catalog';
import {Success} from 'typescript-fsa';
import {ICategoryItem, TGetBannerListResponse} from '../types/types';
import {AsyncActionsCatalog} from './async-actions-catalog';
import {IGetCategoriesResponse, IGetHomepageDataResponse} from '../api/types';

const getBannersListHandlerStarted = (store: IStoreCatalog): IStoreCatalog => {
  return {
    ...store,
    isLoading: true,
    error: false,
  };
};

const getBannersListHandlerDone = (
  store: IStoreCatalog,
  {result}: Success<any, TGetBannerListResponse>,
): IStoreCatalog => {
  return {
    ...store,
    isLoading: false,
    error: false,
    banners: result,
  };
};

const getBannersListHandlerFailed = (store: IStoreCatalog): IStoreCatalog => {
  return {
    ...store,
    isLoading: false,
    error: true,
  };
};

const getHomepageDataHandlerStarted = (store: IStoreCatalog): IStoreCatalog => {
  return {
    ...store,
    isLoading: true,
    error: false,
  };
};

const getHomepageDataHandlerDone = (
  store: IStoreCatalog,
  {result}: Success<any, IGetHomepageDataResponse>,
): IStoreCatalog => {
  return {
    ...store,
    banners: result.promotions,
    products: result.products,
    isLoading: false,
    error: false,
  };
};

const getHomepageDataHandlerFailed = (store: IStoreCatalog): IStoreCatalog => {
  return {
    ...store,
    isLoading: false,
    error: true,
  };
};
const getCategoriesHandlerStarted = (store: IStoreCatalog): IStoreCatalog => {
  return {
    ...store,
    isLoading: true,
    error: false,
  };
};

const getCategoriesHandlerDone = (
  store: IStoreCatalog,
  {result}: Success<any, IGetCategoriesResponse>,
): IStoreCatalog => {
  return {
    ...store,
    categories: result.data,
    isLoading: false,
    error: false,
  };
};

const getCategoriesHandlerFailed = (store: IStoreCatalog): IStoreCatalog => {
  return {
    ...store,
    isLoading: false,
    error: true,
  };
};

export const reducerCatalog: ReducerBuilder<IStoreCatalog> = reducerWithInitialState(
  initialStateCatalog,
)
  .case(
    AsyncActionsCatalog.getBanners.async.started,
    getBannersListHandlerStarted,
  )
  .case(AsyncActionsCatalog.getBanners.async.done, getBannersListHandlerDone)
  .case(
    AsyncActionsCatalog.getBanners.async.failed,
    getBannersListHandlerFailed,
  )

  .case(
    AsyncActionsCatalog.getHomepageData.async.started,
    getHomepageDataHandlerStarted,
  )
  .case(
    AsyncActionsCatalog.getHomepageData.async.done,
    getHomepageDataHandlerDone,
  )
  .case(
    AsyncActionsCatalog.getHomepageData.async.failed,
    getHomepageDataHandlerFailed,
  )
  .case(
    AsyncActionsCatalog.getCategories.async.started,
    getCategoriesHandlerStarted,
  )
  .case(AsyncActionsCatalog.getCategories.async.done, getCategoriesHandlerDone)
  .case(
    AsyncActionsCatalog.getCategories.async.failed,
    getCategoriesHandlerFailed,
  );
