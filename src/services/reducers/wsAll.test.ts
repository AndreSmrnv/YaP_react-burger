import { wsAllReducer as reducer, initialState } from "./wsAll";
import {
    TWsAllActions
} from "../actions";
import * as actions from "../actions";
import * as mocks from '../../utils/mocks';
import * as types from '../types';
import * as actionsTypes from '../constants/actionTypes';

describe("audit wsAllReducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {} as TWsAllActions)
        ).toEqual(
            initialState
        );
    });
  
    it(`should handle connect websocket - ${actionsTypes.WS_CONNECTION_SUCCESS}`, () => {
        
        expect(
            reducer(
                initialState,
                actions.wsAllConnectionSuccess()
            )
        )
        .toEqual(
            {
                ...initialState,
                wsConnected: true,
                wsConnectionFailed: false
            }
        );      
    });

    it(`should handle error from websocket - ${actionsTypes.WS_CONNECTION_ERROR}`, () => {
      const payload = 'test error ';
        expect(
            reducer(
                initialState,
                actions.wsAllConnectionError(payload)
            )
        )
        .toEqual(
            {
                ...initialState,
                error: payload,
                wsConnected: false,
                wsConnectionFailed: true
            }
        );      
    });

    
    it(`should handle close websocket - ${actionsTypes.WS_CONNECTION_CLOSED}`, () => {
        
        expect(
            reducer(
                initialState,
                actions.wsAllConnectionClosed()
            )
        )
        .toEqual(
            {
                ...initialState,
                error: null,
                wsConnected: false,
                wsConnectionFailed: false
            }
        );      
    });
  
    it(`should handle get websocket message  - ${actionsTypes.WS_GET_MESSAGE}`, () => {
        const payload: types.TOrderWSAll = mocks.dataTWSAllOrders;
          expect(
              reducer(
                  initialState,
                  actions.wsAllGetMessage(payload)
              )
          )
          .toEqual(
              {
                  ...initialState,
                  data: mocks.dataTWSAllOrders
              }
          );      
      });
     
    
});