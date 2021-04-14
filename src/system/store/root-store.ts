import {IStoreLogin} from '../../screens/login/store/store-login';
import {IStoreCatalog} from '../../screens/catalog/store/store-catalog';
import {IStoreDelivery} from '../../screens/delivery/store/store-delivery';
import {IStoreProfile} from '../../screens/profile/store/store-profile';
import {IStoreCart} from '../../screens/cart/store/store-cart';

export interface IRequestLoading {
  isLoading: boolean;
  error: boolean;
}

export interface IStore {
  login: IStoreLogin;
  catalog: IStoreCatalog;
  delivery: IStoreDelivery;
  profile: IStoreProfile;
  cart: IStoreCart;
}
