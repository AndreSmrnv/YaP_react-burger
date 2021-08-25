import {
    SET_VIEW_ORDER,
    RESET_VIEW_ORDER
} from '../constants/actionTypes';

const initialState = {
  data: {},
  isLoaded: false,
  lastUpdated: null
 };
  
export const viewedOrderReducer = (state = initialState, action) => {
  
    switch (action.type) {
      
      case SET_VIEW_ORDER: {
            return {
              ...state,
              data: action.payload,
              isLoaded: true,
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