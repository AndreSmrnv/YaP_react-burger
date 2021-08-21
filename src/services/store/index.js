import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  rootReducer from '../reducers';
import { socketOrdersAllMiddleware } from "../middleware";
import { WS_URL } from '../constants/constValue';

const composeEnhancers =
  ( typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ )
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(
  thunk,
  socketOrdersAllMiddleware(WS_URL)
));
export const store = createStore(rootReducer, enhancer);
