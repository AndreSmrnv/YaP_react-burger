import React, { FC } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from '../../../services/hooks';
import styles from './MenuItem.module.css';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { EItemIcon, IItem } from '../../../services/types/menu';
//import PropTypes from "prop-types";
import {  TIconProps} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";

type TComponentsIcon = {
    burgerIcon: ({ type }: TIconProps) => JSX.Element,
    listIcon: ({ type }: TIconProps) => JSX.Element,
    profileIcon: ({ type }: TIconProps) => JSX.Element
};

const componentsIcon = {
    burgerIcon: BurgerIcon,
    listIcon: ListIcon,
    profileIcon: ProfileIcon
};


interface IPropsMenuItem {
 item : IItem
};


const MenuItem: FC<IPropsMenuItem> = ({ item } ) => {
    const { isAuthorized, user, lastUpdated, isFetching } = useSelector((store) => store.sign);
    const MenuIcon= componentsIcon[item.icon] ;
    return (
        <li >
            <NavLink
                to={item.href}
                className={`${styles.menu_link} pr-5 pl-5`}
                activeClassName={styles.menu_link_active}
                exact={item.exact}
            >
            {/* <a className={`${styles.menu_link} pr-5 pl-5`} href={item.href} > */}
                <MenuIcon type="secondary" />                
                <span className="text text_type_main-default pl-2">
                    { isAuthorized ? (item.icon === EItemIcon.profileIcon ? (user.email) : (item.name)) : (item.name)}
                </span>
            {/* </a> */}
            </NavLink>    
        </li>
    )
}

// MenuItem.propTypes = {
//     item: PropTypes.shape(
//         {
//             id: PropTypes.string,
//             name: PropTypes.string,
//             href: PropTypes.string,
//             icon: PropTypes.string,
//         }
//     ).isRequired,

// };
export default MenuItem;