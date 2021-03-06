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

const dataTWSAllOrders: types.TOrderWSAll = {
  orders: [
    {
      "_id": "613112aa47707f001b1528f1",
      "ingredients": [
        "60d3b41abdacab0026a733d1",
        "60d3b41abdacab0026a733d0",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cc",
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c7"
      ],
      "status": "done",
      "name": "Spicy фалленианский флюоресцентный минеральный space бургер",
      "createdAt": "2021-09-02T18:06:34.397Z",
      "updatedAt": "2021-09-02T18:06:34.483Z",
      "number": 2469
    },
    {
      "_id": "61310fa347707f001b1528ec",
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733cd",
        "60d3b41abdacab0026a733cb",
        "60d3b41abdacab0026a733d0"
      ],
      "status": "done",
      "name": "Краторный био-марсианский минеральный space бургер",
      "createdAt": "2021-09-02T17:53:39.598Z",
      "updatedAt": "2021-09-02T17:53:39.646Z",
      "number": 2468
    },
    {
      "_id": "61310e7f47707f001b1528e4",
      "ingredients": [
        "60d3b41abdacab0026a733cf",
        "60d3b41abdacab0026a733c6"
      ],
      "status": "done",
      "name": "Краторный антарианский бургер",
      "createdAt": "2021-09-02T17:48:47.186Z",
      "updatedAt": "2021-09-02T17:48:47.261Z",
      "number": 2467
    },
    {
      "_id": "6130fcb847707f001b1528a1",
      "ingredients": [
        "60d3b41abdacab0026a733cc",
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c6"
      ],
      "status": "done",
      "name": "Краторный spicy бургер",
      "createdAt": "2021-09-02T16:32:56.546Z",
      "updatedAt": "2021-09-02T16:32:56.609Z",
      "number": 2466
    }
  ],
  total: 0,
  totalToday: 0
}


// TODO Экспорт данных для использования в компонентах
export {
  dataTOrder,
  dataTViewedOrder,
  dataTWSAllOrders
};
