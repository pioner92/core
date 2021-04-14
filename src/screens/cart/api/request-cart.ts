import {ApiService} from '../../../system/api/api-service';
import {
  ICartAddOrderRequest,
  ICartGetDataRequest,
  ICartGetDataResponse,
} from './types';

export class RequestCart {
  static getCartData(data: ICartGetDataRequest): Promise<ICartGetDataResponse> {
    return ApiService.post('/api/cart/getCart', data);
  }
  static addOrderToCart(
    data: ICartAddOrderRequest,
  ): Promise<ICartGetDataResponse> {
    return ApiService.post('/api/cart/add', data);
  }
}
