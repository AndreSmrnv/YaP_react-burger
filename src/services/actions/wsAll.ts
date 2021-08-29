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

export type TWsAll = 
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetMessage
  | IWsConnectionStart
  | IWsConnectionStop
;

const wsAllInit = (): TWsAll => (
  {
    type: WS_CONNECTION_START
  }
);

const wsAllClose = (): TWsAll  => (
  {
    type: WS_CONNECTION_STOP
  }
);

const wsAllConnectionSuccess = (): TWsAll => (
  {
    type: WS_CONNECTION_SUCCESS
  }
);

const wsAllConnectionError = (error: string): TWsAll => (
  {
    type: WS_CONNECTION_ERROR,
    payload: error
  }
);

const wsAllConnectionClosed = (): TWsAll => (
  {
    type: WS_CONNECTION_CLOSED
  }
);

const wsAllGetMessage = (data: ReadonlyArray<TOrder>): TWsAll => (
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