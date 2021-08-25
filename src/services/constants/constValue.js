const API_URL = 'https://norma.nomoreparties.space/api';
const WS_URL = 'wss://norma.nomoreparties.space/orders/all';
const WS_SIGN_URL = 'wss://norma.nomoreparties.space/orders';

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';
const ITEM_DETAILS = {
    calories: 'Калории, ккал',
    proteins: 'Белки, г',
    fat: 'Жиры, г',
    carbohydrates: 'Углеводы, г'
};
const PROFILE_NAV_TEXT = {
    profile: 'В этом разделе вы можете изменить свои персональные данные',    
    orders: 'В этом разделе вы можете просмотреть свою историю заказов'
};

const ORDER_STATUS = {
    done: "Выполнен",
    pending: "Готовиться",
    created: "Создан"
  };

  
export {
    API_URL,
    REFRESH_TOKEN,
    ACCESS_TOKEN,
    ITEM_DETAILS,
    WS_URL,
    WS_SIGN_URL,
    PROFILE_NAV_TEXT,
    ORDER_STATUS
};