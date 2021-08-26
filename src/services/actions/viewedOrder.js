import {
    SET_VIEW_ORDER,
    RESET_VIEW_ORDER,
    GET_VIEW_ORDER_REQUEST,
    GET_VIEW_ORDER_SUCCESS,
    GET_VIEW_ORDER_FAILED,
    SET_VIEW_ORDER_ERROR
} from '../constants/actionTypes';
import { getOrderDetailsRequest } from '../api';


function setViewOrder(orderData) {    
    return function (dispatch) {   
        dispatch({
            type: SET_VIEW_ORDER,
            payload: orderData
          });     
    };
}

function resetViewOrder() {    
    return function (dispatch) {   
        dispatch({
            type: RESET_VIEW_ORDER
          });      
    };
}

function getOrderDetails(id) {
  return function (dispatch) {
    //const getOrderDetails = (id) => (dispatch) => {
    //console.log('getOrderDetails0')
    dispatch({
      type: GET_VIEW_ORDER_REQUEST
    });
    getOrderDetailsRequest(id)
      .then(response => response.json()
      )
      .then(result => {
        console.log('getOrderDetails result', result);
        if (!result.success) throw result;
        dispatch({
          type: GET_VIEW_ORDER_SUCCESS,
          payload: result.orders[0]
        });
      })
      .catch(e => {
        // console.log(e);
        dispatch({
          type: GET_VIEW_ORDER_FAILED
        });
        dispatch({
          type: SET_VIEW_ORDER_ERROR ,
          payload: e.message
        });
           
              
      });
    //console.log('getOrderDetails2')
  }
};
  

export {
  setViewOrder,
    resetViewOrder,
    getOrderDetails
};