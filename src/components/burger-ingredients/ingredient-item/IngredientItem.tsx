import React, { FC } from "react";
import { useDispatch } from '../../../services/hooks';
import { useDrag } from 'react-dnd';
import {
    CurrencyIcon,
    Counter
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from 'react-router-dom';
import { TIngredient, TId } from "../../../services/types";
import styles from './IngredientItem.module.css';
const style = {
    cursor: 'move',
};

interface IIngredientItem {
    itemData: TIngredient,
    itemCounter?: number,    
    onItemClick: () => void
};

const IngredientItem: FC<IIngredientItem> = ({ itemData, itemCounter, onItemClick }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [{ isDragging }, dragRef] = useDrag({
        type: 'ingredient',
        item: itemData,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    function handleClick() {
        onItemClick();
        history.replace(`/ingredients/${itemData._id}`, { background: true });
    };
    const opacity = isDragging ? 0.2 : 1;
    //console.log(itemData);
    return (
        <li className={styles.item} onClick={handleClick} ref={dragRef} style={{ ...style, opacity }}>
            {itemCounter && (itemCounter > 0) ? <Counter count={itemCounter} size="default" /> : null}
            <img src={itemData.image} className={`${styles.item_image}`} alt={itemData.name} />

            <p className={`text text_type_digits-default ${styles.item_description} mt-1 mb-1`}>
                <span className="mr-2">{itemData.price}</span>
                <CurrencyIcon type="secondary" />
            </p>

            <h3 className={`text text_type_main-default ${styles.item_name}`}>{itemData.name}</h3>

        </li>
    )
}

// IngredientItem.propTypes = {
//     itemData: PropTypes.shape(
//         {
//             _id: PropTypes.string,
//             name: PropTypes.string,
//             type: PropTypes.string,
//             proteins: PropTypes.number,
//             fat: PropTypes.number,
//             carbohydrates: PropTypes.number,
//             calories: PropTypes.number,
//             price: PropTypes.number,
//             image: PropTypes.string,
//             image_mobile: PropTypes.string,
//             image_large: PropTypes.string,
//             __v: PropTypes.number,
//         }
//     ).isRequired,
//     onItemClick: PropTypes.func.isRequired,
// };


export default IngredientItem;
