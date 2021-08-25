import {
    SET_VIEW_ORDER,
    RESET_VIEW_ORDER
} from '../constants/actionTypes';

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

export {
  setViewOrder,
  resetViewOrder
};