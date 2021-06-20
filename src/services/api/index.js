const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export const getIngredientsRequest = async () => {
    return await fetch(API_URL)    
    ;
  };
  