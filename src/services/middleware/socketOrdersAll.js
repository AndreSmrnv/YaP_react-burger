  import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_STOP,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE,
  } from "../constants/actionTypes";
  
  export const socketOrdersAllMiddleware = (wsUrl) => {
    return (store) => {
      let socket = null;
  
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
            const { orders, total, totalToday } = JSON.parse(data);
            dispatch({
              type: WS_GET_MESSAGE,
              payload: {
                orders,
                total,
                totalToday
              },
            });
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
  
  
  
  