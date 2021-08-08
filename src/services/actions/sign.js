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
import {
    setToken,
    refreshToken,
    clearToken,
    getToken
} from './token'
  
import {
    postRegisterRequest,
    postLoginRequest,
    postLogoutRequest,
    patchProfileRequest
} from '../api';

function getRegister(data) {
    console.log('getRegister', data);
    return function(dispatch) {
   
      dispatch({
        type: GET_REGISTER_REQUEST
      });
        
      postRegisterRequest(data)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                console.log(result); 
                setToken({ accessToken: result.accessToken, refreshToken: result.refreshToken });    
            dispatch({
              type: GET_REGISTER_SUCCESS,
              payload: result.user
            });
                
        })
        .catch(e => {
              console.log(e);
              dispatch({
                type: GET_REGISTER_FAILED
              });
            }) ;
    };
}

function getLogin(data) {
    console.log('getLogin', data);
    return function(dispatch) {
   
      dispatch({
        type: GET_AUTH_REQUEST
      });
        
      postLoginRequest(data)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                console.log(result); 
                setToken({ accessToken: result.accessToken, refreshToken: result.refreshToken });    
            dispatch({
              type: GET_AUTH_SUCCESS,
              payload: result.user
            });
                
        })
        .catch(e => {
              console.log(e);
              dispatch({
                type: GET_AUTH_FAILED
              });
            }) ;
    };
}

function getLogout(token) {
    console.log('getLogout', token);
    return function(dispatch) {
   
      dispatch({
        type: GET_AUTH_REQUEST
      });
        
      postLogoutRequest(token)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                console.log(result); 
                clearToken();    
            dispatch({
              type: SET_PROFILE_CLEAR
            });
                
        })
        .catch(e => {
              console.log(e);
              dispatch({
                type: GET_AUTH_FAILED
              });
            }) ;
    };
}

function updateProfile(data) {
    console.log('updateProfile', data);
    return function(dispatch) {
   
      dispatch({
        type: GET_PROFILE_REQUEST
      });
         
      patchProfileRequest(data, getToken())
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                console.log(result); 
                   
                dispatch({
                    type: GET_PROFILE_SUCCESS,
                    payload: result.user
                  });
                
        })
        .catch(e => {
              console.log(e);
              dispatch({
                type: GET_PROFILE_FAILED
              });
            }) ;
    };
}

 export {
    getRegister,
    getLogin,
    getLogout,
    updateProfile
 };