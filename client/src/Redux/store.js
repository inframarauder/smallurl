import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initalState = {};

const store =
  process.env.NODE_ENV === 'production'
    ? createStore(rootReducer, initalState, applyMiddleware(thunk))
    : createStore(
        rootReducer,
        initalState,
        composeWithDevTools(applyMiddleware(thunk))
      );

export default store;
