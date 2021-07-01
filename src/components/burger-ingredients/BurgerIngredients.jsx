import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import IngredientItem from "./ingredient-item";

import styles from './BurgerIngredients.module.css';



function BurgerIngredients({ prodData = [], openModal }) {
  const [currentTab, setCurrentTab] = React.useState('buns');
  const cart = useSelector(state => state.cart);
  //console.log(prodData);
  useEffect(
    () => {
      window.location.href = `#${currentTab}`;
    },
    [currentTab]
  );

  const [bunsRef, inViewBuns] = useInView({ threshold: 0 });
  const [mainsRef, inViewFilling] = useInView({ threshold: 0 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0 });
  useEffect(() => {

    if (inViewBuns) {
      setCurrentTab("buns");
      console.log('set TAB buns');
    }
    else if (inViewSauces) {
      setCurrentTab("sauces");
      console.log('set TAB sauces');
    }
    else if (inViewFilling) {
      setCurrentTab("mains");
      console.log('set TAB mains');
    }
  }, [inViewBuns, inViewFilling, inViewSauces]);

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
  const countItem = (itemId) => cart.sortedData && cart.sortedData.fillers.filter(item => item._id === itemId).length;
  const countItemBun = (itemId) => cart.sortedData && cart.sortedData.bun._id === itemId;

  return (
    <section className={`${styles.container}`}>
      <div className={styles.header_tabs}>
        <h2 className="text text_type_main-large mt-10 mb-5 ">Соберите бургер</h2>
        <div className={`${styles.tabs}`}>
          <Tab value="buns" active={currentTab === 'buns'} onClick={setCurrentTab}>
            Булки
            </Tab>
          <Tab value="sauces" active={currentTab === 'sauces'} onClick={setCurrentTab}>
            Соусы
            </Tab>
          <Tab value="mains" active={currentTab === 'mains'} onClick={setCurrentTab}>
            Начинки
            </Tab>
        </div>
      </div>
      <div className={`${styles.scroll_list} pr-4`}>

        <section className={styles.sec_items} id="buns" ref={bunsRef}>
          <h2 className={`text text_type_main-medium ${styles.sec_title}`} >Булки</h2>
          <ul className={`${styles.items_list}`}>
            {buhData && Array.isArray(buhData) && buhData.map((item) => (
              <IngredientItem
                key={item._id}
                itemData={item}
                onItemClick={openModal}
                itemCounter={countItemBun(item._id) ? 1 : 0}
              />
            ))}
          </ul>
        </section>
        <section className={styles.sec_items} id="sauces" ref={saucesRef} >
          <h2 className={`text text_type_main-medium ${styles.sec_title}`}>Соусы</h2>
          <ul className={`${styles.items_list}`}>
            {sauceData && Array.isArray(sauceData) && sauceData.map((item) => (
              <IngredientItem
                key={item._id}
                itemData={item}
                onItemClick={openModal}
                itemCounter={countItem(item._id)}
              />
            ))}
          </ul>
        </section>
        <section className={styles.sec_items} id="mains" ref={mainsRef} >
          <h2 className={`text text_type_main-medium ${styles.sec_title}`}>Начинки</h2>
          <ul className={`${styles.items_list}`}>
            {mainData && Array.isArray(mainData) && mainData.map((item) => (
              <IngredientItem
                key={item._id}
                itemData={item}
                onItemClick={openModal}
                itemCounter={countItem(item._id)}
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
