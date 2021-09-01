import React, { FC } from "react";
import { useDispatch, useSelector } from '../../services/hooks';
import { useDrop } from 'react-dnd';
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  SWAP_CONSTRUCTOR_INGREDIENT
} from '../../services/constants/actionTypes';
import {
  Button,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "./constructor-item";
import ConstructorItemSwap from "./constructor-item-swap";
import { TIngredient, TId } from "../../services/types";
import styles from './BurgerConstructor.module.css';

interface IBurgerConstructor {
  openModal: () => void,
}

const BurgerConstructor: FC<IBurgerConstructor> = ({ openModal }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const prodData = [...cart.data];

  const onDropHandler = (data: TIngredient ) => dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, payload: data });
  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop: onDropHandler
  });

  
    const coverData = cart.sortedData.bun && Object.keys(cart.sortedData.bun).length ? [cart.sortedData.bun] : [cart.sortedData.empty] ;
  
  const middleData = prodData && Array.isArray(prodData)
    && cart.sortedData.fillers
    ;
  //const totalBurgerPrice = cart.total;
  const totalBurgerPrice = React.useMemo(
    () =>
      Array.isArray(prodData) &&
      [...coverData, ...middleData, ...coverData].reduce((sum, item) => {
        return sum + item.price;
      }, 0),
    [coverData, middleData]
  );

  interface IRenderMiddle {
    item: TIngredient;
    indx: string;
    
  }
  const renderMiddle = (item: TIngredient, indx: TId) => {
    return (
      <ConstructorItemSwap
        key={indx}
        itemData={item}
        handlerId={indx}
        moveElem={moveElem}
        index={indx}
        id={item._id}
      />
    );
  };
  const moveElem = (dragIndex: TId, hoverIndex: TId) => dispatch({ type: SWAP_CONSTRUCTOR_INGREDIENT, payload: { dragIndex, hoverIndex } });


  return (
    <section className={`${styles.container} pt-25`} ref={dropTarget}>
      <ul className={styles.item_list}>
        {coverData && Array.isArray(coverData) && coverData.map((item) => (

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
            {
              middleData &&
              Array.isArray(middleData) &&
              middleData.map(
                renderMiddle
              )
            }
          </ul>
        </li>

        {coverData && Array.isArray(coverData) && coverData.map(item => (
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



export default BurgerConstructor;
