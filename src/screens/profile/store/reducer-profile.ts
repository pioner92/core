import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers';
import {initialStateProfile, IStoreProfile, IUserData} from './store-profile';
import {Success} from 'typescript-fsa';
import {AsyncActionProfile} from './async-action-profile';

const getUserDataHandlerStarted = (state: IStoreProfile): IStoreProfile => {
  return {
    ...state,
    isLoading: true,
    error: false,
  };
};

const getUserDataHandlerDone = (
  state: IStoreProfile,
  {result}: Success<any, IUserData>,
): IStoreProfile => {
  return {
    ...state,
    isLoading: false,
    error: false,
    userData: result,
  };
};

const getUserDataHandlerFailed = (state: IStoreProfile): IStoreProfile => {
  return {
    ...state,
    isLoading: false,
    error: true,
  };
};

export const reducerProfile: ReducerBuilder<IStoreProfile> = reducerWithInitialState(
  initialStateProfile,
)
  .case(AsyncActionProfile.getUserData.async.started, getUserDataHandlerStarted)
  .case(AsyncActionProfile.getUserData.async.done, getUserDataHandlerDone)
  .case(AsyncActionProfile.getUserData.async.failed, getUserDataHandlerFailed)
