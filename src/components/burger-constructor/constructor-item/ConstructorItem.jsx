import React from "react";
//import { useDrag } from 'react-dnd';

import {
    ConstructorElement,
    DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from './ConstructorItem.module.css';

const ConstructorItem = ({ itemData, isLocked, type }) => {
    // const [{ isDragging }, dragRef] = useDrag({
    //     type: 'ingredient',
    //     item: itemData,
    //     collect: monitor => ({
    //         isDragging: monitor.isDragging()
    //     })
    //   });
    
    return (
        <li className={`${styles.item} mb-4 ${isLocked ? 'pl-8 pr-4' : 'pr-2'}`} >
            {!isLocked && (
                <span className={styles.drag_icon}>
                    <DragIcon type='secondary' />
                </span>
            )
            }
            {/* <div className={styles.item_elem}> */}
            <ConstructorElement
                text={`${itemData.name} ${type === 'top' ? '(верх)' : ''} ${type === 'bottom' ? '(низ)' : ''} `}
                thumbnail={itemData.image_mobile}
                price={itemData.price}
                isLocked={isLocked}
                type={type}
            />
            {/* </div> */}
        </li>
    )
}

ConstructorItem.propTypes = {
    itemData: PropTypes.shape(
        {
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
        }
    ).isRequired,
    type: PropTypes.string,
    isLocked: PropTypes.bool
};

export default ConstructorItem;