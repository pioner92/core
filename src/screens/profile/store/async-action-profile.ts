import {asyncActionCreator} from '../../../system/store/action-creator';
import {IUserData} from './store-profile';
import {RequestProfile} from '../api/request-profile';

export class AsyncActionProfile {
  static getUserData = asyncActionCreator<void, IUserData, Error>(
    'PROFILE/GET_USER_DATA',
    RequestProfile.getUserData,
  );
}
