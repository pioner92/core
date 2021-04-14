import {IAddressItem} from '../../delivery/types/types';
import {IRequestLoading} from '../../../system/store/root-store';

export interface IUserData {
  data: {
    name: string;
    email: string;
    gender: string;
    phone: string;
    bonus: string;
    birthday: string;
    referal: IReferral;
    last_address: IAddressItem;
  };
}

export interface IReferral {
  code: string;
  my_bonus: number;
  friend_bonus: number;
  ref_link: string;
}

export interface IStoreProfile extends IRequestLoading {
  userData: IUserData;
}

export const initialStateProfile: IStoreProfile = {
  userData: {} as IUserData,
  isLoading: false,
  error: false,
};
