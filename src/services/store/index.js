import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  rootReducer from '../reducers';
import { socketOrdersAllMiddleware, socketOrdersSignMiddleware } from "../middleware";
import { WS_URL, WS_SIGN_URL } from '../constants/constValue';

const composeEnhancers =
  ( typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ )
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(
  thunk,
  socketOrdersAllMiddleware(WS_URL),
  socketOrdersSignMiddleware(WS_SIGN_URL)
));
export const store = createStore(rootReducer, enhancer);
