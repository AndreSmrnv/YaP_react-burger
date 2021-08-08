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

const initialState = {
  user: {
    name: null,
    email: null,
    password: null
  },
  isAuthorized: false,
  isFetching: false,
  fetchingFailed: false,
  lastUpdated: null,  
  error: null
};

export const signReduser = (state = initialState, {
  type, formData,
}) => {
  switch (type) {
    case GET_AUTH_REQUEST:
      return {
        ...state,        
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state,        
      };
    case GET_AUTH_FAILED:
      return {
        ...state,        
      };
    case SET_AUTH_ERROR:
      return {
        ...state,        
      };
    case GET_REGISTER_REQUEST:
      return {
        ...state,        
      };
    case GET_REGISTER_SUCCESS:
      return {
        ...state,        
      };
    case GET_REGISTER_FAILED:
      return {
        ...state,        
      };
    case SET_REGISTER_ERROR:
      return {
        ...state,        
      };
    case GET_PROFILE_REQUEST:
      return {
        ...state,        
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,        
      };
    case GET_PROFILE_FAILED:
      return {
        ...state,        
      };
    case SET_PROFILE_ERROR:
      return {
        ...state,        
      };
    case SET_PROFILE_CLEAR:
        return {
          ...state,        
        };
      
    default:
      return state;
  }
};