import * as types from '../../services/types';
// TODO mosk data TSign
const dataTSignData: types.TSignData = 
  {   
    name: "Space флюоресцентный бургер",  
    email: "tets@test.ru"
  }
;
// export type TSignData = {
//   name: string ;
//   email: string ;
// };  
// export type TSignDataWPassword = TSignData & {
//   password?: string ;
// };
// export type TSignDataForgoutPassword = Omit<TSignData, 'name'>;
// export type TSignDataLogin = {
// email: string;
// password: string ;
// };  
// export type TSignDataLogResetPassword = {
// token: string;
// password: string ;
// };  
// TODO Экспорт данных для использования в компонентах
export {
  dataTSignData
};
