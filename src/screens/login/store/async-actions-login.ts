import {RequestLogin} from '../api/request-login';
import {
  IGetSmsRequestData,
  IGetSmsResponse,
  ISendVerificationCodeRequestData,
  ISendVerificationCodeResponse,
} from '../types/types';
import {asyncActionCreator} from '../../../system/store/action-creator';

export class AsyncActionsLogin {
  static getSms = asyncActionCreator<
    IGetSmsRequestData,
    IGetSmsResponse,
    Error
  >('LOGIN/GET_SMS', RequestLogin.getSms);

  static sendVerificationCode = asyncActionCreator<
    ISendVerificationCodeRequestData,
    ISendVerificationCodeResponse,
    Error
  >('LOGIN/SEND_VERIFICATION_CODE', RequestLogin.sendVerificationCode);
}
