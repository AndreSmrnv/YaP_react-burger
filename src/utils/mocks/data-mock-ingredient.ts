import * as types from '../../services/types';
// TODO mosk data TIngredient
const dataTIngredient: types.TIngredient = 
  {
    "_id":"60666c42cc7b410027a1a9b1",
    "name":"Краторная булка N-200i",
    "type": types.EItemType.typeBun,
    "proteins":80,
    "fat":24,
    "carbohydrates":53,
    "calories":420,
    "price":1255,
    "image":"https://code.s3.yandex.net/react/code/bun-02.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
    "__v":0
  };
  const dataTIngredientEmpty: types.TIngredient = 
    {
      _id:"60666c42cc7b410027a1a9b2",
      name:"Собери здесь свой бургер",
      type: types.EItemType.typeEmpty,
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image:"https://raw.githubusercontent.com/AndreSmrnv/YaP_react-burger/sprint-4/step-1/src/images/icon-burger.svg",
      image_mobile:"https://raw.githubusercontent.com/AndreSmrnv/YaP_react-burger/sprint-4/step-1/src/images/icon-burger.svg",
      image_large:"https://raw.githubusercontent.com/AndreSmrnv/YaP_react-burger/sprint-4/step-1/src/images/icon-burger.svg",
      __v:0
    }
  ;

  const dataTIngredientFillers: Array<types.TIngredient> =[
  {
    "_id":"60666c42cc7b410027a1a9bc",
    "name":"Плоды Фалленианского дерева",
    "type":types.EItemType.typeMain,
    "proteins":20,
    "fat":5,
    "carbohydrates":55,
    "calories":77,
    "price":874,
    "image":"https://code.s3.yandex.net/react/code/sp_1.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
    "__v":0
  },
  {
    "_id":"60666c42cc7b410027a1a9bb",
    "name":"Хрустящие минеральные кольца",
    "type":types.EItemType.typeMain,
    "proteins":808,
    "fat":689,
    "carbohydrates":609,
    "calories":986,
    "price":300,
    "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
    "__v":0
  },
  {
    "_id":"60666c42cc7b410027a1a9ba",
    "name":"Соус с шипами Антарианского плоскоходца",
    "type":types.EItemType.typeSauce,
    "proteins":101,
    "fat":99,
    "carbohydrates":100,
    "calories":100,
    "price":88,
    "image":"https://code.s3.yandex.net/react/code/sauce-01.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/sauce-01-large.png",
    "__v":0
  }
]  
// TODO Экспорт данных для использования в компонентах
export {
  dataTIngredient,
  dataTIngredientEmpty,
  dataTIngredientFillers
};
