import {ApiService} from '../../../system/api/api-service';

export class RequestProfile {
  static getUserData() {
    return ApiService.post('/api/user/getUser');
  }
}
