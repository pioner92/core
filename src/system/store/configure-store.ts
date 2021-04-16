import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {rootReducer} from './root-reducer';
import {IStore} from './root-store';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['system', 'login', 'catalog', 'delivery', 'profile'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = (callback: () => void, state?: IStore) => {
  const store = createStore(
    persistedReducer,
    state,
    applyMiddleware(thunk, logger),
  );
  const persistor = persistStore(store, null, callback);
  return {store, persistor};
};

// export const {store, persistor} = configureStore();
