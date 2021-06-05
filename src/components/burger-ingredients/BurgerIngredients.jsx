import React from "react";
import styles from './BurgerIngredients.module.css';
import {
  Tab,
  CurrencyIcon,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';



function BurgerIngredients({ prodData = [] }) {
  const [currentTab, setCurrentTab] = React.useState('bun');
  //console.log(prodData);
  const buhData = prodData && Array.isArray(prodData)
    && prodData.filter(
      item => item.type === 'bun'
    )
    ;
  const sauceData = prodData && Array.isArray(prodData)
    && prodData.filter(
      item => item.type === 'sauce'
    )
    ;
  const mainData = prodData && Array.isArray(prodData)
    && prodData.filter(
      item => item.type === 'main'
    )
    ;

  return (
    <section className={`${styles.ingredients}`}>
      <div className={styles.headerTabs}>
        <h2 className="text text_type_main-large mt-10 mb-5 ">Соберите бургер</h2>
        <div className={`${styles.tabs}`}>
          <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrentTab}>
            Булки
            </Tab>
          <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrentTab}>
            Соусы
            </Tab>
          <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
            Начинки
            </Tab>
        </div>
      </div>
      <div className={styles.scrollList}>

        <section>
          <h2 className={`text text_type_main-medium ${styles.secTitle}`}>Булки</h2>
          <ul className={`${styles.itemsList}`}>
            {buhData && Array.isArray(buhData) && buhData.map((item) => (
              <IngredientItem
                key={item._id}
                itemData={item}

              />
            ))}
          </ul>
        </section>
        <section>
          <h2 className={`text text_type_main-medium ${styles.secTitle}`}>Соусы</h2>
          <ul className={`${styles.itemsList}`}>
            {sauceData && Array.isArray(sauceData) && sauceData.map((item) => (
              <IngredientItem
                key={item._id}
                itemData={item}

              />
            ))}
          </ul>
        </section>
        <section>
          <h2 className={`text text_type_main-medium ${styles.secTitle}`}>Начинки</h2>
          <ul className={`${styles.itemsList}`}>
            {mainData && Array.isArray(mainData) && mainData.map((item) => (
              <IngredientItem
                key={item._id}
                itemData={item}

              />
            ))}
          </ul>
        </section>

      </div>
    </section>

  )

}

const IngredientItem = ({ itemData }) => {
  //console.log(itemData);
  return (
    <li className={styles.item}>
      <Counter count={1} size="default" />
      <img src={itemData.image} className={`${styles.itemImage}`} alt={itemData.name} />

      <p className={`text text_type_digits-default ${styles.itemDescription}`}>
        <span className="mr-2">{itemData.price}</span>
        <CurrencyIcon type="secondary" />
      </p>

      <h3 className={`text text_type_main-default ${styles.itemName}`}>{itemData.name}</h3>

    </li>
  )
}



export default BurgerIngredients;
