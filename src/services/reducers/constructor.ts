import type { TIngredient } from '../types/data';
import type { TConstructorActions } from '../actions';
import {
    GET_CONSTRUCTOR_INGREDIENT,
    ADD_CONSTRUCTOR_INGREDIENT,
    DELETE_CONSTRUCTOR_INGREDIENT,
    RESET_CONSTRUCTOR,
    SWAP_CONSTRUCTOR_INGREDIENT
} from '../constants/actionTypes';

type TConstructorState = {
    data: ReadonlyArray<TIngredient>;
    sortedData: {
        bun: Readonly<TIngredient> ,
        fillers: Array<TIngredient>,
        empty: Readonly<TIngredient> 
    },
    total: number,
    lastUpdated: number | null
};

const initialState: TConstructorState= {
    data: [],
    sortedData: {
        bun: {} as TIngredient,
        fillers: [],
        empty: {} as TIngredient 
    },

    total: 0,
    lastUpdated: null
  };
  
  export const constructorReducer = (state = initialState, action: TConstructorActions): TConstructorState  => {
    
     
    switch (action.type) {
        case ADD_CONSTRUCTOR_INGREDIENT: {

            let sortedData = { ...state.sortedData };
            if (action.payload.type === 'empty') {               
                sortedData = { ...sortedData, empty: action.payload };
            }
            else if (action.payload.type === 'bun') {               
                sortedData = { ...sortedData, bun: action.payload };
            }
            else {
                sortedData = { ...sortedData, fillers: [...sortedData.fillers, action.payload] };
            }
            return {
                ...state,
                data: [...state.data, action.payload],
                sortedData,
                lastUpdated: Date.now()
            };


        }
        case DELETE_CONSTRUCTOR_INGREDIENT: {
            const sortedData = { ...state.sortedData };
            sortedData.fillers = sortedData.fillers.filter((item,indx) => action.payload !== indx);
            return {
                ...state,
                sortedData,
                lastUpdated: Date.now()
            };
        } 
        case SWAP_CONSTRUCTOR_INGREDIENT: {
            const { dragIndex, hoverIndex } = action.payload;
            const sortedData = { ...state.sortedData };
            //console.log(`SWAP - ${dragIndex} - ${hoverIndex}`);            
            sortedData.fillers[dragIndex] = sortedData.fillers.splice(hoverIndex, 1, sortedData.fillers[dragIndex])[0];
            return {
                ...state,
                sortedData,
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
            return initialState ;
        }

        default: {
            return state;
        }
    }
}