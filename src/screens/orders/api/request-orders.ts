import {ApiService} from '../../../system/api/api-service';
import {
  IGetOrderDataRequest,
  IGetOrderDataResponse,
  IGetOrdersResponse,
} from './types';

export class RequestOrders {
  static getOrders(): Promise<IGetOrdersResponse> {
    return ApiService.post('/api/user/getOrdersHistory');
  }
  static getOrderData(
    data: IGetOrderDataRequest,
  ): Promise<IGetOrderDataResponse> {
    return ApiService.post('/api/user/getUserOrder', data);
  }
}
