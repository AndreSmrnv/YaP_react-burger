import React, { FC} from "react";
import { NavLink} from 'react-router-dom';
import styles from './AppHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import dataMenu from "../../utils/data-menu";
import MenuItem from "./menu-item";
import { IItem } from '../../services/types/menu';

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

      <NavLink to="/" title="Stellar burgers" className={styles.logo}>
        <Logo />
      </NavLink>
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
