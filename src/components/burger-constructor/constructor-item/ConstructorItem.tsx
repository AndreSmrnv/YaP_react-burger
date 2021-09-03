import React, { FC } from "react";
import {
    ConstructorElement
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "../../../services/types";
import styles from './ConstructorItem.module.css';

interface IConstructorItem {
    itemData: TIngredient,
    type: "top" | "bottom",
    isLocked: boolean
};

const ConstructorItem: FC<IConstructorItem> = ({ itemData, type, isLocked }) => {
    
    return (
        <li className={`${styles.item} mb-4 pl-8 pr-4'}`}>
            
            {/* <div className={styles.item_elem}> */}
            <ConstructorElement
                text={`${itemData.name} ${type === 'top' ? '(верх)' : ''} ${type === 'bottom' ? '(низ)' : ''} `}
                thumbnail={itemData.image_mobile}
                price={itemData.price}
                type={type}
                isLocked={ isLocked}
            />
            {/* </div> */}
        </li>
    )
}



export default ConstructorItem;