import { orderReducer as reducer, initialState } from "./order";
import {
    TOrderActions
} from "../actions";
import * as actions from "../actions";
import * as mocks from '../../utils/mocks';
import * as types from '../types';
import * as actionsTypes from '../constants/actionTypes';

describe("audit orderReducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {} as TOrderActions)
        ).toEqual(
            initialState
        );
    });
  
    it(`should handle get order request success - ${actionsTypes.GET_ORDER_SUCCESS}`, () => {
      const payload = mocks.dataTOrder as types.TOrder;
        expect(
            reducer(
                initialState,
                actions.getOrderSuccess(payload)
            )
        )
        .toEqual(
            {
                ...initialState,
                data: mocks.dataTOrder, 
                numberOrd: mocks.dataTOrder.number
            }
        );      
    });
  
    it(`should handle get order request - ${actionsTypes.GET_ORDER_REQUEST}`, () => {      
        expect(
            reducer(
                initialState,
                actions.getOrderRequest( )             
            )
        ).toEqual(
          {
                ...initialState,        
                isFetching: true 
            }
        );
    });
  
    it(`should handle get order request failure - ${actionsTypes.GET_ORDER_FAILED}`, () => {
      expect(
        reducer(        
            initialState,
            actions.getOrderFailed( )    
          )
        
      ).toEqual(
        {
            ...initialState,        
            fetchingFailed: true,
          isFetching: false 
          }
      );
    });
     
    
});
  