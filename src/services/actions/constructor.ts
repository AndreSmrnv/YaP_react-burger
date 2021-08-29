import type { TIngredient } from '../types/data';
import {    
    ADD_CONSTRUCTOR_INGREDIENT,
    DELETE_CONSTRUCTOR_INGREDIENT,
    RESET_CONSTRUCTOR,
    GET_CONSTRUCTOR_INGREDIENT,
    SWAP_CONSTRUCTOR_INGREDIENT
} from '../constants/actionTypes';



export interface IAddConstructorIngredient {
    readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
    readonly payload: TIngredient;
};

export interface IDeleteConstructorIngredient {
    readonly type: typeof DELETE_CONSTRUCTOR_INGREDIENT;
    readonly payload: number;
};

export interface IResetConstructor {
    readonly type: typeof RESET_CONSTRUCTOR;
};

export interface IGetConstructorIngredient {
    readonly type: typeof GET_CONSTRUCTOR_INGREDIENT;
};

export interface ISwapConstructorIngredient {
    readonly type: typeof SWAP_CONSTRUCTOR_INGREDIENT;
};

export type TConstructorActions = 
  | ISwapConstructorIngredient
  | IResetConstructor
  | IDeleteConstructorIngredient
  | IAddConstructorIngredient
  | IGetConstructorIngredient
    ;
  
export const deleteConstructorIngredient = (id: number): IDeleteConstructorIngredient => ({
        type: DELETE_CONSTRUCTOR_INGREDIENT,
        payload:  id
});
      
export const resetConstructor = (): IResetConstructor => ({
    type: RESET_CONSTRUCTOR
});
  
export const addConstructorIngredient = (payload: TIngredient): IAddConstructorIngredient => ({
    type: ADD_CONSTRUCTOR_INGREDIENT,
    payload
    
});