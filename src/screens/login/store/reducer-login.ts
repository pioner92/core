import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers';
import {AsyncActionsLogin} from './async-actions-login';
import {IStoreLogin, initialStateLogin} from './store-login';
import {IGetSmsResponse, ISendVerificationCodeResponse} from '../types/types';
import {Success} from 'typescript-fsa';
import {ActionsLogin} from './actions-login';

const getSmsHandlerStarted = (store: IStoreLogin): IStoreLogin => {
  return {
    ...store,
    error: false,
    isLoading: true,
  };
};

const getSmsHandlerDone = (
  store: IStoreLogin,
  {result}: Success<any, IGetSmsResponse>,
): IStoreLogin => {
  return {
    ...store,
    isLoading: false,
    error: false,
    request_id: result.request_id,
  };
};

const getSmsHandlerFailed = (store: IStoreLogin): IStoreLogin => {
  return {
    ...store,
    isLoading: false,
    error: true,
  };
};

const sendVerificationCodeHandlerStarted = (
  store: IStoreLogin,
): IStoreLogin => {
  return {
    ...store,
    isLoading: true,
    error: false,
  };
};
const sendVerificationCodeHandlerDone = (
  store: IStoreLogin,
  {result}: Success<any, ISendVerificationCodeResponse>,
): IStoreLogin => {
  return {
    ...store,
    isLoading: false,
    token: result.data.token,
    error: false,
  };
};

const sendVerificationCodeHandlerFailed = (store: IStoreLogin): IStoreLogin => {
  return {
    ...store,
    isLoading: false,
    error: true,
  };
};

const logoutHandler = (store: IStoreLogin): IStoreLogin => {
  console.log('LOGOUT');
  return {
    ...store,
    token: '',
    getSmsResult: '',
    request_id: '',
  };
};

export const reducerLogin: ReducerBuilder<IStoreLogin> = reducerWithInitialState(
  initialStateLogin,
)
  .case(AsyncActionsLogin.getSms.async.started, getSmsHandlerStarted)
  .case(AsyncActionsLogin.getSms.async.done, getSmsHandlerDone)
  .case(AsyncActionsLogin.getSms.async.failed, getSmsHandlerFailed)

  .case(
    AsyncActionsLogin.sendVerificationCode.async.started,
    sendVerificationCodeHandlerStarted,
  )
  .case(
    AsyncActionsLogin.sendVerificationCode.async.done,
    sendVerificationCodeHandlerDone,
  )
  .case(
    AsyncActionsLogin.sendVerificationCode.async.failed,
    sendVerificationCodeHandlerFailed,
  )
  .case(ActionsLogin.logoutAccount, logoutHandler);
