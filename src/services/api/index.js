const API_URL = 'https://norma.nomoreparties.space/api';
const headers = {
  post: { 'Content-Type': 'application/json' },
  get: {}
};

export const getIngredientsRequest = async () => {
    return await fetch(`${API_URL}/ingredients`)    
    ;
};
  
export const checkoutRequest = async (idOrderIngredients) => {
  console.log("fetch post checkoutRequest");
  return await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: headers.post,
    body: JSON.stringify({ ingredients: idOrderIngredients })
  })    
  ;
};

export const postRegisterRequest = async (data) => {
  console.log("fetch post registerRequest");
  return await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: headers.post,
    body: JSON.stringify({ ...data })
  })    
  ;
};

export const postLoginRequest = async (data) => {
  console.log("fetch post loginRequest");
  return await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: headers.post,
    body: JSON.stringify({ ...data })
  })    
  ;
};

export const postRefreshToken = async (token) => {
  console.log("fetch post registerRequest");
  return await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: headers.post,
    body: JSON.stringify({ token })
  })    
  ;
};



// TODO : { 'Content-Type': 'application/json' }
// TODO ingredients https://norma.nomoreparties.space/api/ingredients
// TODO orders https://norma.nomoreparties.space/api/orders
// TODO ITEMS_API_URL = 'https://norma.nomoreparties.space/api/ingredients';
// TODO  ORDER_API_URL = 'https://norma.nomoreparties.space/api/orders';
// TODO   FORGOT_PASSWORD_API_URL = 'https://norma.nomoreparties.space/api/password-reset';
// TODO  RESET_PASSWORD_API_URL = 'https://norma.nomoreparties.space/api/password-reset/reset';
// TODO  REGISTER_API_URL = 'https://norma.nomoreparties.space/api/auth/register';
// TODO LOGIN_API_URL = 'https://norma.nomoreparties.space/api/auth/login';
// TODO  LOGOUT_API_URL = 'https://norma.nomoreparties.space/api/auth/logout';
// TODO  TOKEN_API_URL = 'https://norma.nomoreparties.space/api/auth/token';
// TODO  USER_API_URL = 'https://norma.nomoreparties.space/api/auth/user';  