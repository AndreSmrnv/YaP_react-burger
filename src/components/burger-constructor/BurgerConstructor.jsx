import React from "react";
import {
  Button,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "./constructor-item";
import PropTypes from "prop-types";
import styles from './BurgerConstructor.module.css';

function BurgerConstructor({ prodData, openModal }) {

  const topData = prodData && Array.isArray(prodData)
    && [prodData[0]]
    ;
  //console.log(topData);
  const bottomData = topData && Array.isArray(topData)
    && [...topData]
    ;
  //console.log(bottomData);
  const middleData = prodData && Array.isArray(prodData)
    && prodData.filter(
      item => item.type !== 'buh'
    )
    ;
  const totalBurgerPrice = React.useMemo(
    () =>
      Array.isArray(prodData) &&
      [...topData, ...middleData, ...bottomData].reduce((sum, item) => {
        return sum + item.price;
      }, 0),
    [prodData]
  );
  //console.log(totalBurgerPrice);

  return (
    <section className={`${styles.container} pt-25`}>
      <ul className={styles.item_list}>
        {topData && Array.isArray(topData) && topData.map(item => (

          <ConstructorItem
            key={item._id}
            itemData={item}
            type='top'
            isLocked
          />
        )
        )
        }
        <li className={`mb-4`} key='middle'>
          <ul className={styles.scroll_list}>
            {middleData && Array.isArray(middleData) && middleData.map(item => (
              
                <ConstructorItem
                  key={item._id}
                  itemData={item}
                />
             
            )
            )
            }
          </ul>


        </li>

        {bottomData && Array.isArray(bottomData) && bottomData.map(item => (
          <ConstructorItem
            key={item._id}
            itemData={item}
            type='bottom'
            isLocked
          />

        )
        )
        }
      </ul>
      <div className={`${styles.checkout_container} pr-8`}>
        <div className="mr-10">
          <span className="text text_type_digits-medium mr-2">
            {totalBurgerPrice}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={openModal}
        >
          Оформить заказ
          </Button>
      </div>

    </section>
  )

}

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;
