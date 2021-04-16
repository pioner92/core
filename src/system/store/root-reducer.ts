import {combineReducers} from 'redux';
import {reducerLogin} from '../../screens/login/store/reducer-login';
import {reducerCatalog} from '../../screens/catalog/store/reducer-catalog';
import {reducerDelivery} from '../../screens/delivery/store/reducer-delivery';
import {reducerProfile} from '../../screens/profile/store/reducer-profile';
import {reducerCart} from '../../screens/cart/store/reducer-cart';
import {reducerOrders} from '../../screens/orders/store/reducer-orders';

export const rootReducer = combineReducers({
  login: reducerLogin,
  catalog: reducerCatalog,
  delivery: reducerDelivery,
  profile: reducerProfile,
  cart: reducerCart,
  ordersHistory: reducerOrders,
});
