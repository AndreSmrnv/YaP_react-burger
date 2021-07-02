import React from "react";
import styles from './AppHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import dataMenu from "../../utils/data-menu";
import MenuItem from "./menu-item";






function AppHeader() {

  return (
    <div className={`${styles.container} pt-4 pb-4 p`}>
      <nav>
        <ul className={styles.menu}>
          {dataMenu.left.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </ul>
      </nav>
      <a href="##" title="Stellar burgers" className={styles.logo}>
        <Logo />
      </a>
      <nav>
        <ul className={styles.menu_right}>
          {dataMenu.right.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default AppHeader;
