import React from "react";

import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import IngredientItem from "./ingredient-item";

import styles from './BurgerIngredients.module.css';



function BurgerIngredients({ prodData = [], openModal }) {
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
    <section className={`${styles.container}`}>
      <div className={styles.header_tabs}>
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
      <div className={`${styles.scroll_list} pr-4`}>

        <section className={styles.sec_items}>
          <h2 className={`text text_type_main-medium ${styles.sec_title}`}>Булки</h2>
          <ul className={`${styles.items_list}`}>
            {buhData && Array.isArray(buhData) && buhData.map((item) => (
              <IngredientItem
                key={item._id}
                itemData={item}
                onItemClick={openModal}
              />
            ))}
          </ul>
        </section>
        <section className={styles.sec_items}>
          <h2 className={`text text_type_main-medium ${styles.sec_title}`}>Соусы</h2>
          <ul className={`${styles.items_list}`}>
            {sauceData && Array.isArray(sauceData) && sauceData.map((item) => (
              <IngredientItem
                key={item._id}
                itemData={item}
                onItemClick={openModal}
              />
            ))}
          </ul>
        </section>
        <section className={styles.sec_items}>
          <h2 className={`text text_type_main-medium ${styles.sec_title}`}>Начинки</h2>
          <ul className={`${styles.items_list}`}>
            {mainData && Array.isArray(mainData) && mainData.map((item) => (
              <IngredientItem
                key={item._id}
                itemData={item}
                onItemClick={openModal}
              />
            ))}
          </ul>
        </section>

      </div>
    </section>

  )

}



BurgerIngredients.propTypes = {
  prodData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    }),
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};


export default BurgerIngredients;
