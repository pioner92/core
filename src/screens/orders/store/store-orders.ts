import {IOrderItem} from '../api/types';

export interface IStoreOrdersHistory {
  orders: IOrderItem[];
}

export const initialStateOrdersHistory: IStoreOrdersHistory = {
  orders: [],
};
