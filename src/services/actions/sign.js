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
    patchProfileRequest,
    getProfileRequest,
    postForgotPasswordRequest,
    postResetPasswordRequest
} from '../api';

function getRegister(data) {
    //console.log('getRegister', data);
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
    //console.log('getLogin', data);
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
                //console.log(result); 
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
    //console.log('getLogout', token);
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
                //console.log(result); 
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
    //console.log('updateProfile', data);
    return function(dispatch) {
   
      dispatch({
        type: GET_PROFILE_REQUEST
      });
        
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
                dispatch({
                    type: GET_PROFILE_SUCCESS,
                    payload: result.user
                  });
                
        })
        .catch(e => {
          console.log(e);
          if (e.message === 'jwt expired') {
            dispatch(
              refreshToken( getProfile() )
              )
          }
              dispatch({
                type: GET_PROFILE_FAILED
              });
            }) ;
    };
}

function getProfile() {
    //console.log('getProfile');
    return function(dispatch) {
   
      dispatch({
        type: GET_PROFILE_REQUEST
      });
        
      const accessToken = getToken();  
      getProfileRequest(accessToken)
        .then(response => response.json()          
         )        
        .then(          
          result => {
                //console.log(result); 
            if (!result.success) throw result;
                dispatch({
                    type: GET_PROFILE_SUCCESS,
                    payload: result.user
                  });
                
        })
        .catch(res => {
          //console.log(res);
          
          if (res.message === 'jwt expired') {
            dispatch(
              refreshToken( getProfile() )
              )
          }
              dispatch({
                type: GET_PROFILE_FAILED
              });
            }) ;
    };
}



function getForgotPassword(data, history) {
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

function getResetPassword(data, history) {
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