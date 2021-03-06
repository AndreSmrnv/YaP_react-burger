  import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_STOP,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
} from "../constants/actionTypes";
import {   
    wsAllConnectionError
} from '../actions'; 
import { AnyAction, MiddlewareAPI, Middleware } from "redux";


  export const socketOrdersAllMiddleware = (wsUrl: string): Middleware => {
    return (store: MiddlewareAPI) => {
      let socket: WebSocket | null = null;
  
      return (next) => (action) => {
        const { dispatch } = store;
        const { type, payload } = action;
  
        if (type === WS_CONNECTION_START) {         
          socket = new WebSocket(wsUrl);
        }
  
        if (type === WS_CONNECTION_STOP) {          
          socket.close(1000, "Page closed by user");
        }
          
        if (socket) {
            
          socket.onopen = (event) => {
              dispatch({
                  type: WS_CONNECTION_SUCCESS,
                  payload: event
              });
            };
            
          socket.onerror = (event) => {
              dispatch({
                  type: WS_CONNECTION_ERROR,
                  payload: event
              });
          };
          
          socket.onmessage = (event) => {
              const { data } = event;
            if(data?.includes('ping')){
                socket.send('pong');
            }
            const { success, message, orders, total, totalToday } = JSON.parse(data);
            if (success) {
                dispatch({
                    type: WS_GET_MESSAGE,
                    payload: {
                        orders,
                        total,
                        totalToday
                    },
                });
            } else {
              message && dispatch( wsAllConnectionError(message) )
            }
          };
          
          socket.onclose = (event) => {
            dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
          };  
          
          if (type === WS_SEND_MESSAGE) {                        
            socket.send(JSON.stringify(payload));
          }
  
        }
  
        next(action);
      };
    };
  };
  
  
  
  