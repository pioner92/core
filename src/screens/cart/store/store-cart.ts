import {ICartGetDataResponse} from '../api/types';
import {IRequestLoading} from '../../../system/store/root-store';
import {IProductItem} from '../../catalog/types/types';

export interface ISelectedItems {
  [key: string]: {product: IProductItem; count: number};
}

export interface IStoreCart extends IRequestLoading {
  cartData: ICartGetDataResponse;
  selectedProducts: ISelectedItems;
}

export const initialStateCart: IStoreCart = {
  cartData: {} as ICartGetDataResponse,
  selectedProducts: {} as ISelectedItems,
  isLoading: false,
  error: false,
};
