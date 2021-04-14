import {ApiService} from '../../../system/api/api-service';
import {
  IGetSmsRequestData,
  IGetSmsResponse,
  ISendVerificationCodeResponse,
  ISendVerificationCodeRequestData,
} from '../types/types';

export class RequestLogin {
  static getSms(data: IGetSmsRequestData): Promise<IGetSmsResponse> {
    return ApiService.post('/api/auth/getSms', data);
  }
  static sendVerificationCode(
    data: ISendVerificationCodeRequestData,
  ): Promise<ISendVerificationCodeResponse> {
    return ApiService.post('/api/auth/authorization', data);
  }
}
