export interface IStoreLogin {
  isLoading: boolean;
  error: boolean;
  getSmsResult: string;
  request_id: string;
  token: string;
}

export const initialStateLogin: IStoreLogin = {
  isLoading: false,
  error: false,
  getSmsResult: '',
  request_id: '',
  token: '',
};
