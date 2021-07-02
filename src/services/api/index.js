// TODO ingredients https://norma.nomoreparties.space/api/ingredients
// TODO orders https://norma.nomoreparties.space/api/orders

const API_URL = 'https://norma.nomoreparties.space/api';
const headers = { 'Content-Type': 'application/json' };

export const getIngredientsRequest = async () => {
    return await fetch(`${API_URL}/ingredients`)    
    ;
};
  
export const checkoutRequest = async (idOrderIngredients) => {
  console.log("fetch post");
  return await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ ingredients: idOrderIngredients })
  })    
  ;
};

//TODO : { 'Content-Type': 'application/json' }
  