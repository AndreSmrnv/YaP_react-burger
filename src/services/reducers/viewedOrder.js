import {
    SET_VIEW_ORDER,
    RESET_VIEW_ORDER
} from '../constants/actionTypes';

const initialState = {
  data: {},  
    lastUpdated: null
 };
  
export const viewedOrderReducer = (state = initialState, action) => {
  
    switch (action.type) {
      
      case SET_VIEW_ORDER: {
            return {
                ...state,
                data: action.payload,
                lastUpdated: Date.now()
            };
      }
      case RESET_VIEW_ORDER: {
            return {
                ...state,
                data: initialState.data
            };
      }  
      
      default: {
        return state;
      }
    }
  };