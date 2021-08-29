import type { TOrder } from '../types/data';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_CONNECTION_START,
  WS_CONNECTION_STOP
} from '../constants/actionTypes';


export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};
export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: string;
};
export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
};
export interface IWsGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: ReadonlyArray<TOrder>;
};
export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
};
export interface IWsConnectionStop {
  readonly type: typeof WS_CONNECTION_STOP;
};

export type TWsAllActions = 
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetMessage
  | IWsConnectionStart
  | IWsConnectionStop
;

const wsAllInit = (): TWsAllActions => (
  {
    type: WS_CONNECTION_START
  }
);

const wsAllClose = (): TWsAllActions  => (
  {
    type: WS_CONNECTION_STOP
  }
);

const wsAllConnectionSuccess = (): TWsAllActions => (
  {
    type: WS_CONNECTION_SUCCESS
  }
);

const wsAllConnectionError = (error: string): TWsAllActions => (
  {
    type: WS_CONNECTION_ERROR,
    payload: error
  }
);

const wsAllConnectionClosed = (): TWsAllActions => (
  {
    type: WS_CONNECTION_CLOSED
  }
);

const wsAllGetMessage = (data: Array<TOrder>): TWsAllActions => (
  {
    type: WS_GET_MESSAGE,
    payload: data
  }
);

export {
  wsAllConnectionSuccess,
  wsAllConnectionError,
  wsAllConnectionClosed,
  wsAllGetMessage,
  wsAllInit,
  wsAllClose
};