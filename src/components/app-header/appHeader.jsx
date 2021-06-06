import React from "react";
import styles from './AppHeader.module.css';
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
      <a className={`${styles.menu_link} pr-5 pl-5`} href={item.href} >
        <MenuIcon type="secondary" />
        <span className="text text_type_main-default pl-2">{item.name}</span>
      </a>
    </li>
  )
}



function AppHeader() {

  return (
    <header className={`${styles.container} pt-4 pb-4 p`}>
      <nav>
        <ul className={styles.menu}>
          {dataMenu.left.map((item, index) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </ul>
      </nav>
      <a href="/" title="Stellar burgers" className={styles.logo}>
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
