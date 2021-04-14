import {actionCreator} from '../../../system/store/action-creator';
import {ISelectedItems} from './store-cart';

export class ActionCart {
  static selectProduct = actionCreator<ISelectedItems>('CART/SELECT_PRODUCT');
}
