import React from "react";
import styles from './MenuItem.module.css';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";


const componentsIcon = {
    burgerIcon: BurgerIcon,
    listIcon: ListIcon,
    profileIcon: ProfileIcon
};

const MenuItem = ({ item }) => {
    const MenuIcon = componentsIcon[item.icon];
    return (
        <li >
            <a className={`${styles.menu_link} pr-5 pl-5`} href={item.href} >
                <MenuIcon type="secondary" />
                <span className="text text_type_main-default pl-2">{item.name}</span>
            </a>
        </li>
    )
}

MenuItem.propTypes = {
    item: PropTypes.shape(
        {
            id: PropTypes.string,
            name: PropTypes.string,
            href: PropTypes.string,
            icon: PropTypes.string,
        }
    ).isRequired,

};
export default MenuItem;