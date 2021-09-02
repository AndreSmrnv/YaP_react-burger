import * as types from '../../services/types';
// TODO mosk data TIngredient
const dataTOrder: types.TOrder = 
  {
    "_id": "6130ce3447707f001b152826",
    "ingredients": [
      "60d3b41abdacab0026a733c7",
      "60d3b41abdacab0026a733cd",
      "60d3b41abdacab0026a733c7"
    ],
    "owner": "612a612815024d001b9d0ecc",
    "status": "done",
    "name": "Space флюоресцентный бургер",
    "createdAt": "2021-09-02T13:14:28.370Z",
    "updatedAt": "2021-09-02T13:14:28.477Z",
    "number": 2463,
    "__v": 0
  }
;

const dataTViewedOrder: types.TViewedOrder =
{
  "_id": "6130fba347707f001b1528a0",
  "ingredients": [
    "60d3b41abdacab0026a733cd",
    "60d3b41abdacab0026a733c6",
    "60d3b41abdacab0026a733c6"
  ],
  "owner": "611d41ed9d952f001b825137",
  "status": "done",
  "name": "Краторный space бургер",
  "createdAt": "2021-09-02T16:28:19.980Z",
  "updatedAt": "2021-09-02T16:28:20.069Z",
  "number": 2465,
  "__v": 0,
  "groupedIngredients": [
    {
      "_id": "60d3b41abdacab0026a733cd",
      "name": "Соус фирменный Space Sauce",
      "type": types.EItemType.typeSauce,
      "proteins": 50,
      "fat": 22,
      "carbohydrates": 11,
      "calories": 14,
      "price": 80,
      "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
      "__v": 0,
      "count": 1
    },
    {
      "_id": "60d3b41abdacab0026a733c6",
      "name": "Краторная булка N-200i",
      "type": types.EItemType.typeBun,
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0,
      "count": 2
    }
  ],
  "ingredientsWDetails": [
    {
      "_id": "60d3b41abdacab0026a733cd",
      "name": "Соус фирменный Space Sauce",
      "type": types.EItemType.typeSauce,
      "proteins": 50,
      "fat": 22,
      "carbohydrates": 11,
      "calories": 14,
      "price": 80,
      "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
      "__v": 0
    },
    {
      "_id": "60d3b41abdacab0026a733c6",
      "name": "Краторная булка N-200i",
      "type": types.EItemType.typeBun,
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0
    },
    {
      "_id": "60d3b41abdacab0026a733c6",
      "name": "Краторная булка N-200i",
      "type": types.EItemType.typeBun,
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0
    }
  ],
  "orderTotalPrice": 2590
}

// TODO Экспорт данных для использования в компонентах
export {
  dataTOrder,
  dataTViewedOrder
};
