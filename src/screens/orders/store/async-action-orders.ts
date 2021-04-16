import {asyncActionCreator} from '../../../system/store/action-creator';
import {RequestOrders} from '../api/request-orders';
import {
  IGetOrderDataRequest,
  IGetOrderDataResponse,
  IGetOrdersResponse,
} from '../api/types';

export class AsyncActionOrders {
  static getOrders = asyncActionCreator<void, IGetOrdersResponse, Error>(
    'ORDERS/GET_ORDERS',
    RequestOrders.getOrders,
  );
  static getOrderData = asyncActionCreator<
    IGetOrderDataRequest,
    IGetOrderDataResponse,
    Error
  >('ORDERS/GET_ORDER_DATA', RequestOrders.getOrderData);
}
