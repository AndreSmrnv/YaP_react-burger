import type { TOrder } from '../types/data';
import {
  WS_SIGN_CONNECTION_START,
  WS_SIGN_CONNECTION_SUCCESS,
  WS_SIGN_CONNECTION_ERROR,
  WS_SIGN_CONNECTION_CLOSED,
  WS_SIGN_GET_MESSAGE,
  WS_SIGN_CONNECTION_STOP
} from '../constants/actionTypes';

export interface IWsSignConnectionSuccess {
  readonly type: typeof WS_SIGN_CONNECTION_SUCCESS;
};
export interface IWsSignConnectionError {
  readonly type: typeof WS_SIGN_CONNECTION_ERROR;
  readonly payload: string;
};
export interface IWsSignConnectionClosed {
  readonly type: typeof WS_SIGN_CONNECTION_CLOSED;
};
export interface IWsSignGetMessage {
  readonly type: typeof WS_SIGN_GET_MESSAGE;
  readonly payload: ReadonlyArray<TOrder>;
};
export interface IWsSignConnectionStart {
  readonly type: typeof WS_SIGN_CONNECTION_START;
};
export interface IWsSignConnectionStop {
  readonly type: typeof WS_SIGN_CONNECTION_STOP;
};

export type TWsSignActions = 
  | IWsSignConnectionSuccess
  | IWsSignConnectionError
  | IWsSignConnectionClosed
  | IWsSignGetMessage
  | IWsSignConnectionStart
  | IWsSignConnectionStop
;

const wsSignInit = (): TWsSignActions => (
  {
    type: WS_SIGN_CONNECTION_START
  }
);

const wsSignClose = (): TWsSignActions => (
  {
    type: WS_SIGN_CONNECTION_STOP
  }
);

const wsSignConnectionSuccess = (): TWsSignActions => (
  {
    type: WS_SIGN_CONNECTION_SUCCESS
  }
);

const wsSignConnectionError = (error: string): TWsSignActions => (
  {
    type: WS_SIGN_CONNECTION_ERROR,
    payload: error
  }
);

const wsSignConnectionClosed = (): TWsSignActions => (
  {
    type: WS_SIGN_CONNECTION_CLOSED
  }
);

const wsSignGetMessage = (data: Array<TOrder>): TWsSignActions => (
  {
    type: WS_SIGN_GET_MESSAGE,
    payload: data
  }
);

export {
  wsSignConnectionSuccess,
  wsSignConnectionError,
  wsSignConnectionClosed,
  wsSignGetMessage,
  wsSignInit,
  wsSignClose
};