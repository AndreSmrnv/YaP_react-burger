import type { TSignData, TSignDataWPassword } from '../types/data';
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
} from '../token';
  
import {
    postRegisterRequest,
    postLoginRequest,
    postLogoutRequest,
    patchProfileRequest,
    apiGetProfileRequest,
    postForgotPasswordRequest,
    postResetPasswordRequest
} from '../api';
import { History } from 'history';
import { AppDispatch, AppThunk } from "../types";

export interface IGetAuthRequest {
  readonly type: typeof GET_AUTH_REQUEST;
};
export interface IGetAuthSuccess {
  readonly type: typeof GET_AUTH_SUCCESS;
  readonly payload: TSignData;
};
export interface IGetAuthFailed {
  readonly type: typeof GET_AUTH_FAILED;
};
export interface IGetRegisterRequest {
  readonly type: typeof GET_REGISTER_REQUEST;
};
export interface IGetRegisterSuccess {
  readonly type: typeof GET_REGISTER_SUCCESS;
  readonly payload: TSignDataWPassword;
};
export interface IGetRegisterFailed {
  readonly type: typeof GET_REGISTER_FAILED;
};
export interface IGetProfileRequest {
  readonly type: typeof GET_PROFILE_REQUEST;
};
export interface IGetProfileSuccess {
  readonly type: typeof GET_PROFILE_SUCCESS;
  readonly payload: TSignDataWPassword;
};
export interface IGetProfileFailed {
  readonly type: typeof GET_PROFILE_FAILED;
};
export interface IGetProfileClear {
  readonly type?: typeof SET_PROFILE_CLEAR;
};
  
export type TSignActions = 
  | IGetProfileClear
  | IGetProfileFailed
  | IGetProfileSuccess
  | IGetProfileRequest
  | IGetRegisterFailed
  | IGetRegisterSuccess
  | IGetRegisterRequest
  | IGetAuthFailed
  | IGetAuthSuccess
  | IGetAuthRequest   
  ;

export const getAuthRequest = (): TSignActions => ({
  type: GET_AUTH_REQUEST
});
export const getAuthSuccess = (data: TSignData): TSignActions => ({
  type: GET_AUTH_SUCCESS,
  payload:  data
});  
export const getAuthFailed = (): TSignActions => ({
  type: GET_AUTH_FAILED
});

export const getRegisterRequest = (): TSignActions => ({
  type: GET_REGISTER_REQUEST
});
export const getRegisterSuccess = (data: TSignDataWPassword): TSignActions => ({
  type: GET_REGISTER_SUCCESS,
  payload:  data
});  
export const getRegisterFailed = (): TSignActions => ({
  type: GET_REGISTER_FAILED
});

export const getProfileRequest = (): TSignActions => ({
  type: GET_PROFILE_REQUEST
});
export const getProfileSuccess = (data: TSignDataWPassword): TSignActions => ({
  type: GET_PROFILE_SUCCESS,
  payload:  data
});  
export const getProfileFailed = (): TSignActions => ({
  type: GET_PROFILE_FAILED
});
export const getProfileClear = (): TSignActions => ({
  type: SET_PROFILE_CLEAR
});

function getRegister(data: TSignDataWPassword) {
    //console.log('getRegister', data);
    return function(dispatch: AppDispatch) {
   
      dispatch(
        getRegisterRequest()
        
      );
        
      postRegisterRequest(data)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                console.log(result); 
                setToken({ accessToken: result.accessToken, refreshToken: result.refreshToken });    
            dispatch(
              getRegisterSuccess( result.user )
             
            );
                
        })
        .catch(e => {
              console.log(e);
          dispatch(
            getRegisterFailed()
            
          );
            }) ;
    };
}

function getLogin(data: TSignData) {
    //console.log('getLogin', data);
    return function(dispatch: AppDispatch) {
   
      dispatch(
        getAuthRequest()
        
      );
        
      postLoginRequest(data)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                //console.log(result); 
                setToken({ accessToken: result.accessToken, refreshToken: result.refreshToken });    
            dispatch(
              getAuthSuccess(result.user)
              
            );
                
        })
        .catch(e => {
              console.log(e);
          dispatch(
            getAuthFailed()
            
          );
            }) ;
    };
}

function getLogout(token: string) {
    //console.log('getLogout', token);
    return function(dispatch: AppDispatch) {
   
      dispatch(
        getAuthRequest()
        
      );
        
      postLogoutRequest(token)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                //console.log(result); 
                clearToken();    
            dispatch(
              getProfileClear()
              
            );
                
        })
        .catch(e => {
              console.log(e);
          dispatch(
            getAuthFailed()
           
          );
            }) ;
    };
}

function updateProfile(data: TSignDataWPassword) {
    //console.log('updateProfile', data);
    return function(dispatch: AppDispatch) {
   
      dispatch(
        getProfileRequest()
        
      );
        
      const accessToken = getToken();  
      patchProfileRequest(data, accessToken)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                console.log(result); 
                if (!result.success) throw result;   
            dispatch(
              getProfileSuccess(result.user)
              
            );
                
        })
        .catch(e => {
          console.log(e);
          if (e.message === 'jwt expired') {
            dispatch(
              refreshToken( getProfile() )
              )
          }
          dispatch(
            getProfileFailed()
            
          );
            }) ;
    };
}

function getProfile() {
    //console.log('getProfile');
    return function(dispatch: AppDispatch) {
   
      dispatch(
        getProfileRequest()
        
      );
        
      const accessToken = getToken();  
      apiGetProfileRequest(accessToken)
        .then(response => response.json()          
         )        
        .then(          
          result => {
                //console.log(result); 
            if (!result.success) throw result;
            dispatch(
              getProfileSuccess(result.user)
              
            );
                
        })
        .catch(res => {
          //console.log(res);
          
          if (res.message === 'jwt expired') {
            dispatch(
              refreshToken( getProfile() )
              )
          }
          dispatch(
            getProfileFailed()
           
          );
            }) ;
    };
}



function getForgotPassword(data: TSignData, history : History) {
    //console.log('getForgotPassword');
    return function() {
   
     
      postForgotPasswordRequest(data)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                //console.log(result); 
                history.push({
                    pathname: "/reset-password",
                    state: { resetPassword: true },
                  });
                 
                
                
        })
        .catch(e => {
              console.log(e);
              
            }) ;
    };
}

function getResetPassword(data: TSignData, history : History) {
    //console.log('getResetPassword');
    return function() {
   
     
      postResetPasswordRequest(data)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                console.log(result); 
                history.push({
                    pathname: "/login",
                    state: { resetPassword: true },
                  });
                 
                
                
        })
        .catch(e => {
              console.log(e);
              
            }) ;
    };
}


 export {
    getRegister,
    getLogin,
    getLogout,
    updateProfile,
    getProfile,
    getForgotPassword,
    getResetPassword
 };