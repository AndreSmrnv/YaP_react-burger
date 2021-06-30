import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED
} from '../constants/actionTypes';
import { checkoutRequest } from '../api';




export function getOrderNumber(data) {
    return function(dispatch) {
   
      dispatch({
        type: GET_ORDER_REQUEST
      });
        
      checkoutRequest(data)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
            console.log(result);
          
            dispatch({
              type: GET_ORDER_SUCCESS,
              payload: result
            });          
        })
        .catch(e => {
              console.log(e);
              dispatch({
                type: GET_ORDER_FAILED
              });
            }) ;
    };
  }