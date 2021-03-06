import type { TSignData, TSignDataWPassword } from '../types/data';
import type { TSignActions } from '../actions';
import {
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILED,
  SET_AUTH_ERROR,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAILED,
  SET_REGISTER_ERROR,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  SET_PROFILE_ERROR,
  SET_PROFILE_CLEAR
} from '../constants/actionTypes';

type TSignState = {
  user: TSignDataWPassword ,  
  isAuthorized: boolean,
  isFetching: boolean,
  fetchingFailed: boolean,    
  lastUpdated: number | null
  error: string | null
}

export const initialState: TSignState = {
  user: {} as TSignDataWPassword,
  isAuthorized: false,
  isFetching: false,
  fetchingFailed: false,
  lastUpdated: null,  
  error: null
};

export const signReduser = (state = initialState, action: TSignActions): TSignState => {
  switch (action.type) {
    case GET_AUTH_REQUEST:
      return {
        ...state,
        fetchingFailed: false,  
        isAuthorized: false,    
        isFetching: true
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state, 
        fetchingFailed: false,
        isAuthorized: true,
        user: action.payload,        
        //lastUpdated: Date.now(),
        isFetching: false
      };
    case GET_AUTH_FAILED:
      return {
        ...state, 
        fetchingFailed: true,
        isAuthorized: false, 
        isFetching: false
      };
    case SET_AUTH_ERROR:
      return {
        ...state, 
        fetchingFailed: true,
            error: action.payload
      };
    case GET_REGISTER_REQUEST:
      return {
        ...state,
        fetchingFailed: false,  
        isAuthorized: false,    
        isFetching: true
      };
    case GET_REGISTER_SUCCESS:
      return {
        ...state, 
        fetchingFailed: false,
        isAuthorized: true,
        user: action.payload,        
        //lastUpdated: Date.now(),
        isFetching: false
      };
    case GET_REGISTER_FAILED:
      return {
        ...state,  
        fetchingFailed: true,
        isAuthorized: false, 
        isFetching: false
      };
    case SET_REGISTER_ERROR:
      return {
        ...state,
        fetchingFailed: true,
            error: action.payload
      };
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        fetchingFailed: false,            
        isFetching: true
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        fetchingFailed: false,
        isAuthorized: true,
        user: action.payload,        
        //lastUpdated: Date.now(),
        isFetching: false
      };
    case GET_PROFILE_FAILED:
      return {
        ...state, 
        fetchingFailed: true,
        isAuthorized: false, 
        isFetching: false
      };
    case SET_PROFILE_ERROR:
      return {
        ...state,        
      };
    case SET_PROFILE_CLEAR:
        return {
          ...state, 
          user: initialState.user,
          isAuthorized: false
        };
      
    default:
      return state;
  }
};