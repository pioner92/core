import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers';
import {initialStateCart, IStoreCart, ISelectedItems} from './store-cart';
import {AsyncActionCart} from './async-action-cart';
import {Success} from 'typescript-fsa';
import {ICartGetDataResponse} from '../api/types';
import {ActionCart} from './action-cart';

const getCartDataHandlerStarted = (state: IStoreCart): IStoreCart => {
  return {
    ...state,
    isLoading: true,
    error: false,
  };
};

const getCartDataHandlerDone = (
  state: IStoreCart,
  {result}: Success<any, ICartGetDataResponse>,
): IStoreCart => {
  return {
    ...state,
    isLoading: false,
    error: false,
    cartData: result,
  };
};

const getCartDataHandlerFailed = (state: IStoreCart): IStoreCart => {
  return {
    ...state,
    isLoading: false,
    error: true,
  };
};

const selectItem = (state: IStoreCart, items: ISelectedItems): IStoreCart => {
  return {
    ...state,
    selectedProducts: {...items},
  };
};

export const reducerCart: ReducerBuilder<IStoreCart> = reducerWithInitialState(
  initialStateCart,
)
  .case(AsyncActionCart.getCartData.async.started, getCartDataHandlerStarted)
  .case(AsyncActionCart.getCartData.async.done, getCartDataHandlerDone)
  .case(AsyncActionCart.getCartData.async.failed, getCartDataHandlerFailed)

  .case(ActionCart.selectProduct, selectItem);
