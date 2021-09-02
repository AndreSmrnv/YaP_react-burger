import { IItem, EItemIcon } from '../../services/types';
interface IDataMenu {
  left: ReadonlyArray<IItem>;
  right: ReadonlyArray<IItem>;
}

// TODO menu data
const dataMenu: IDataMenu = {
  left: [
    {
      "id": "1",
      "name": "Конструктор",
      "href": "/",
      "icon": EItemIcon.burgerIcon,
      "exact": true  
    },
    {
      "id": "2",
      "name": "Лента заказов",
      "href": "/feed",
      "icon": EItemIcon.listIcon,
      "exact": false   
    },
  ],
  right: [
    {
      "id": "1",
      "name": "Личный кабинет",
      "href": "/profile",
      "icon": EItemIcon.profileIcon,
      "exact": false   
    }
  ],

}  ;


export default dataMenu;
