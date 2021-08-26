import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    SET_ORDER_ERROR
} from '../constants/actionTypes';
import { checkoutRequest } from '../api';
import { 
  getToken
} from './token';



export function getOrderNumber(data) {
    return function(dispatch) {
   
      dispatch({
        type: GET_ORDER_REQUEST
      });
      const accessToken = getToken();  
      checkoutRequest(data,accessToken)
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
  
export function setOrderError(data) {
    return function(dispatch) {   
        dispatch({
            type: SET_ORDER_ERROR,
            payload: data
          }); 
    };
  }