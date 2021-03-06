import React, { FC, useEffect, useState } from "react";
import { useSelector } from '../../services/hooks';
import { useInView } from 'react-intersection-observer';
import {
  Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import { TId, EItemType } from "../../services/types";
import IngredientItem from "./ingredient-item";

import styles from './BurgerIngredients.module.css';



interface IBurgerIngredients {
  openModal: () => void;
}

const BurgerIngredients: FC<IBurgerIngredients> = ({ openModal }) => {
  const [currentTab, setCurrentTab] = useState('buns');
  const { cart, ingredients } = useSelector(state => ({ cart: state.cart, ingredients: state.ingredients }));
  // const ingredients = useSelector(state => state.ingredients);
  const prodData = [...ingredients.data];
  //console.log(prodData);
  // useEffect(
  //   () => {
  //     window.location.href = `#${currentTab}`;      
  //   },
  //   [currentTab]
  // );

  const [bunsRef, inViewBuns] = useInView({ threshold: 0 });
  const [mainsRef, inViewFilling] = useInView({ threshold: 0 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0 });
  useEffect(() => {

    if (inViewBuns) {
      setCurrentTab("buns");

    }
    else if (inViewSauces) {
      setCurrentTab("sauces");

    }
    else if (inViewFilling) {
      setCurrentTab("mains");

    }
  }, [inViewBuns, inViewFilling, inViewSauces]);

  const setTab = (tab: string) => {
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const buhData = prodData && Array.isArray(prodData)
    && prodData.filter(
      item => item.type === EItemType.typeBun
    )
    ;
  const sauceData = prodData && Array.isArray(prodData)
    && prodData.filter(
      item => item.type === EItemType.typeSauce
    )
    ;
  const mainData = prodData && Array.isArray(prodData)
    && prodData.filter(
      item => item.type === EItemType.typeMain
    )
    ;
  const countItem = (itemId: TId) => cart.sortedData && cart.sortedData.fillers?.filter(item => item._id === itemId).length;
  const countItemBun = (itemId: TId) => cart.sortedData && cart.sortedData.bun?._id === itemId;

  return (
    <section className={`${styles.container}`}>
      <div className={styles.header_tabs}>
        <h2 className="text text_type_main-large mt-10 mb-5 ">???????????????? ????????????</h2>
        <div className={`${styles.tabs}`}>
          <Tab value="buns" active={currentTab === 'buns'} onClick={setTab}>
            ??????????
            </Tab>
          <Tab value="sauces" active={currentTab === 'sauces'} onClick={setTab}>
            ??????????
            </Tab>
          <Tab value="mains" active={currentTab === 'mains'} onClick={setTab}>
            ??????????????
            </Tab>
        </div>
      </div>
      <div className={`${styles.scroll_list} pr-4`}>

        <section className={styles.sec_items} id="buns" ref={bunsRef}>
          <h2 className={`text text_type_main-medium ${styles.sec_title}`} >??????????</h2>
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
          <h2 className={`text text_type_main-medium ${styles.sec_title}`}>??????????</h2>
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
          <h2 className={`text text_type_main-medium ${styles.sec_title}`}>??????????????</h2>
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

export default BurgerIngredients;
