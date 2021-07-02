import React from "react";

import {
    ConstructorElement
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from './ConstructorItem.module.css';

const ConstructorItem = ({ itemData, type, isLocked }) => {
    
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