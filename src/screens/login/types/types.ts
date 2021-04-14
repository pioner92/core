export interface IGetSmsRequestData {
  phone: string;
}
export interface IGetSmsResponse {
  request_id: string;
}

export interface ISendVerificationCodeRequestData {
  request_id: string;
  code: string;
}

export interface ISendVerificationCodeResponse {
  data: {
    token: string;
  };
}
