import {asyncActionCreator} from '../../../system/store/action-creator';
import {
  ICartAddOrderRequest,
  ICartGetDataRequest,
  ICartGetDataResponse,
} from '../api/types';
import {RequestCart} from '../api/request-cart';

export class AsyncActionCart {
  static getCartData = asyncActionCreator<
    ICartGetDataRequest,
    ICartGetDataResponse,
    Error
  >('CART/GET_CART_DATA', RequestCart.getCartData);
  static addOrderToCart = asyncActionCreator<
    ICartAddOrderRequest,
    ICartGetDataResponse,
    Error
  >('CART/ADD_ORDER_TO_CART', RequestCart.addOrderToCart);
}
