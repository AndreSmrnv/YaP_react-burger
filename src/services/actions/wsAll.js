import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE, 
} from '../constants/actionTypes';

export const wsAllConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS
  };
};

export const wsAllConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR
  };
};

export const wsAllConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsAllGetMessage = data => {
  return {
    type: WS_GET_MESSAGE,
    payload: data
  };
};


