//ingredients
///export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST' as const;
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS' as const;
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED' as const;
//constructor 
export const GET_CONSTRUCTOR_INGREDIENT = 'GET_CONSTRUCTOR_INGREDIENT' as const;
export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT' as const;
export const DELETE_CONSTRUCTOR_INGREDIENT = 'DELETE_CONSTRUCTOR_INGREDIENT' as const;
export const RESET_CONSTRUCTOR = 'RESET_CONSTRUCTOR' as const
export const SWAP_CONSTRUCTOR_INGREDIENT = 'SWAP_CONSTRUCTOR_INGREDIENT' as const;
//viewedItem
export const SET_VIEW_ITEM = 'SET_VIEW_ITEM' as const;
export const RESET_VIEW_ITEM = 'RESET_VIEW_ITEM' as const;
//viewedOrder
export const SET_VIEW_ORDER = 'SET_VIEW_ORDER' as const;
export const RESET_VIEW_ORDER = 'RESET_VIEW_ORDER' as const;
export const GET_VIEW_ORDER_REQUEST = 'GET_VIEW_ORDER_REQUEST' as const;
export const GET_VIEW_ORDER_SUCCESS = 'GET_VIEW_ORDER_SUCCESS' as const;
export const GET_VIEW_ORDER_FAILED = 'GET_VIEW_ORDER_FAILED' as const;
export const SET_VIEW_ORDER_ERROR = 'SET_VIEW_ORDER_ERROR' as const;
//order
///export const GET_ORDER_NUMBER = 'GET_ORDER_NUMBER'; 
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST' as const;
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS' as const;
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED' as const;
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST' as const;
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS' as const;
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED' as const;
export const SET_ORDER_ERROR = 'SET_ORDER_ERROR' as const;
//modals
export const OPEN_MODAL_DETAILS = 'OPEN_MODAL_DETAILS' as const;
export const CLOSE_MODAL_DETAILS = 'CLOSE_MODAL_DETAILS' as const;
export const OPEN_MODAL_ORDER = 'OPEN_MODAL_ORDER' as const;
export const CLOSE_MODAL_ORDER = 'CLOSE_MODAL_ORDER' as const;
//sign
export const GET_AUTH_REQUEST = 'GET_AUTH_REQUEST' as const;
export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS' as const;
export const GET_AUTH_FAILED = 'GET_AUTH_FAILED' as const;
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR' as const;
export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST' as const;
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS' as const;
export const GET_REGISTER_FAILED = 'GET_REGISTER_FAILED' as const;
export const SET_REGISTER_ERROR = 'SET_REGISTER_ERROR' as const;
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST' as const;
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS' as const;
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED' as const;
export const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR' as const;
export const SET_PROFILE_CLEAR = 'SET_PROFILE_CLEAR' as const;

//ws
export const WS_CONNECTION_START = 'WS_CONNECTION_START' as const;
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS' as const;
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR' as const;
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED' as const;
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE' as const;
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE' as const;
export const WS_CONNECTION_STOP = 'WS_CONNECTION_STOP' as const;

export const WS_SIGN_CONNECTION_START = 'WS_SIGN_CONNECTION_START' as const;
export const WS_SIGN_CONNECTION_SUCCESS = 'WS_SIGN_CONNECTION_SUCCESS' as const;
export const WS_SIGN_CONNECTION_ERROR = 'WS_SIGN_CONNECTION_ERROR' as const;
export const WS_SIGN_CONNECTION_CLOSED = 'WS_SIGN_CONNECTION_CLOSED' as const;
export const WS_SIGN_GET_MESSAGE = 'WS_SIGN_GET_MESSAGE' as const;
export const WS_SIGN_SEND_MESSAGE = 'WS_SIGN_SEND_MESSAGE' as const;
export const WS_SIGN_CONNECTION_STOP = 'WS_SIGN_CONNECTION_STOP' as const;