import React from "react";
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import dataMenu from "../../utils/data-menu";


const componentsIcon = {
  burgerIcon: BurgerIcon,
  listIcon: ListIcon,
  profileIcon: ProfileIcon
};

const MenuItem = ({ item }) => {
  const MenuIcon = componentsIcon[item.icon];
  return (
    <li >
      <a className={`${styles.menu_item_link}`} href={item.href} >
        <MenuIcon type="secondary" />
        <span className="text">{item.name}</span>
      </a>
    </li>
  )
}



function AppHeader() {

  return (
    <header className={`${styles.container}`}>
      <nav>
        <ul className={styles.menu}>
          {dataMenu.left.map((item, index) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </ul>
      </nav>
      <a href="/" title="Stellar burgers">
        <Logo />
      </a>
      <nav>
        <ul className={styles.menu_right}>
          {dataMenu.right.map((item, index) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;
