import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers';
import {
  initialStateOrdersHistory,
  IStoreOrdersHistory,
} from './store-orders';
import {AsyncActionOrders} from './async-action-orders';
import {Success} from 'typescript-fsa';
import {IGetOrdersResponse} from '../api/types';

const getOrderHistoryHandlerDone = (
  state: IStoreOrdersHistory,
  {result}: Success<any, IGetOrdersResponse>,
): IStoreOrdersHistory => {
  return {
    ...state,
    orders: result.orders,
  };
};

export const reducerOrders: ReducerBuilder<IStoreOrdersHistory> = reducerWithInitialState(
  initialStateOrdersHistory,
).case(
  AsyncActionOrders.getOrders.async.done,
  getOrderHistoryHandlerDone,
);
