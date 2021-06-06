import React from "react";
import styles from './BurgerConstructor.module.css';
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerConstructor({ prodData }) {

  let totalBurgerPrice = 610;


  const topData = prodData && Array.isArray(prodData)
    && [prodData[0]]
    ;
  console.log(topData);
  const bottomData = topData && Array.isArray(topData)
    && [...topData]
    ;
  console.log(bottomData);
  const middleData = prodData && Array.isArray(prodData)
    && prodData.filter(
      item => item.type === 'main'
    )
    ;
  console.log(middleData);


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
        <li>
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

        >
          Оформить заказ
          </Button>
      </div>

    </section>
  )

}

const ConstructorItem = ({ itemData, type, isLocked }) => {
  //console.log(itemData);
  return (
    <li className={`${styles.item} mb-4 ${isLocked ? 'pl-8 pr-6' : 'pr-2'}`}>
      {!isLocked && (<span className={styles.drag_icon}>
        <DragIcon type='secondary' />
      </span>)}
      <ConstructorElement
        type={type === 'top' ? 'top' : type === 'bottom' ? 'bottom' : null}

        isLocked={isLocked}
        text={`${itemData.name} ${type === 'top' ? '(верх)' : ''} ${type === 'bottom' ? '(низ)' : ''} `}
        thumbnail={itemData.image_mobile}
        price={itemData.price}
      />

    </li>
  )
}

export default BurgerConstructor;
