import { API_URL } from '../constants/constValue';
//const API_URL = 'https://norma.nomoreparties.space/api';
const headers = {
  post: { 'Content-Type': 'application/json' },
  get: {}
};

export const apiGetIngredientsRequest = async () => {
    return await fetch(`${API_URL}/ingredients`)    
    ;
};
  
export const checkoutRequest = async (idOrderIngredients, token) => {
  //console.log("fetch post checkoutRequest");
  return await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { ...headers.post, authorization: `Bearer ${token}`},
    body: JSON.stringify({ ingredients: idOrderIngredients })
  })    
  ;
};

export const postRegisterRequest = async (data) => {
  //console.log("fetch post registerRequest");
  return await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: headers.post,
    body: JSON.stringify({ ...data })
  })    
  ;
};

export const postLoginRequest = async (data) => {
  //console.log("fetch post loginRequest");
  return await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: headers.post,
    body: JSON.stringify({ ...data })
  })    
  ;
};

export const postRefreshTokenRequest = async (token) => {
  //console.log("fetch post registerRequest");
  return await fetch(`${API_URL}/auth/token`, {
    method: 'POST',
    headers: headers.post,
    body: JSON.stringify({ token })
  })    
  ;
};


export const postLogoutRequest = async (token) => {
  //console.log("fetch post registerRequest");
  return await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    headers: headers.post,
    body: JSON.stringify({ token })
  })    
  ;
};

export const patchProfileRequest = async (data, token) => {
  //console.log("fetch patch profileRequest");
  return await fetch(`${API_URL}/auth/user`, {
    method: 'PATCH',
    headers: { ...headers.post, authorization: `Bearer ${token}`},
    body: JSON.stringify({ ...data })
  })    
  ;
};

export const getProfileRequest = async (token) => {
  //console.log("fetch get profileRequest");
  return await fetch(`${API_URL}/auth/user`, {
    method: 'GET',
    headers: { ...headers.get, authorization: `Bearer ${token}`}
    
  })    
  ;
};

export const postForgotPasswordRequest = async (data) => {
  //console.log("fetch post forgotPasswordRequest");
  return await fetch(`${API_URL}/password-reset`, {
    method: 'POST',
    headers: { ...headers.post},
    body: JSON.stringify({ ...data })
  })    
  ;
};

export const postResetPasswordRequest = async (data) => {
  //console.log("fetch post resetPasswordRequest");
  return await fetch(`${API_URL}/password-reset/reset`, {
    method: 'POST',
    headers: { ...headers.post},
    body: JSON.stringify({ ...data })
  })    
  ;
};

export const getOrderDetailsRequest = async (id) => {
  console.log("fetch get OrderDetailsRequest");
  return await fetch(`${API_URL}/orders/${id}`, {
    method: 'GET',
    headers: { ...headers.get}
    
  })    
  ;
};




// TODO : { 'Content-Type': 'application/json' }

// TODO  ITEMS_API_URL = 'https://norma.nomoreparties.space/api/ingredients';
// TODO  ORDER_API_URL = 'https://norma.nomoreparties.space/api/orders';
// TODO  FORGOT_PASSWORD_API_URL = 'https://norma.nomoreparties.space/api/password-reset';
// TODO  RESET_PASSWORD_API_URL = 'https://norma.nomoreparties.space/api/password-reset/reset';
// TODO  REGISTER_API_URL = 'https://norma.nomoreparties.space/api/auth/register';
// TODO  LOGIN_API_URL = 'https://norma.nomoreparties.space/api/auth/login';
// TODO  LOGOUT_API_URL = 'https://norma.nomoreparties.space/api/auth/logout';
// TODO  TOKEN_API_URL = 'https://norma.nomoreparties.space/api/auth/token';
// TODO  USER_API_URL = 'https://norma.nomoreparties.space/api/auth/user';  