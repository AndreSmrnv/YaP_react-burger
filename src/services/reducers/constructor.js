import {
    GET_CONSTRUCTOR_INGREDIENT,
    ADD_CONSTRUCTOR_INGREDIENT,
    DELETE_CONSTRUCTOR_INGREDIENT,
    RESET_CONSTRUCTOR
} from '../constants/actionTypes';

const initialState = {
    data: [],
    sortedData: {
        bun: {},
        fillers: []
    },
    total: 0,
    lastUpdated: null
  };
  
  export const constructorReducer = (state = initialState, action) => {
    
      console.log(action.type);
      console.log(action.payload);
    switch (action.type) {
        case ADD_CONSTRUCTOR_INGREDIENT: {

            
            // if (action.payload.type === 'bun') {
            //     // return {
            //     //     ...state,
            //     //     data: [...state.data, action.item],
            //     //     sortedData: { ...state.sortedData, bun: action.payload.item },

            //     //     lastUpdated: Date.now()
            //     // };
            // } else {
                
            // }
            return {
                ...state,
               data: [...state.data, action.payload],
               // sortedData: { ...state.sortedData, fillers: [...state.sortedData.fillers, action.payload.item] },
                lastUpdated: Date.now()
            };


        }
        case DELETE_CONSTRUCTOR_INGREDIENT: {
            return {
                ...state,
                //data: state.data.filter(item => action.payload !== item),
                lastUpdated: Date.now()
            };
        } 
        case GET_CONSTRUCTOR_INGREDIENT: { 
            
            return {
                ...state,
               data: [...state.data, ...action.payload],               
                lastUpdated: Date.now()
            };
        }    
        case RESET_CONSTRUCTOR: {
            return { ...state, initialState };
        }

        default: {
            return state;
        }
    }
}