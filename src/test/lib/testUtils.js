import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../../reducers';
import { middlewares } from '../../configureStore';

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
