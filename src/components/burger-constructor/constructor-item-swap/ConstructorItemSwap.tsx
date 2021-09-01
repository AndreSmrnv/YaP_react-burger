import React, { FC, useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from '../../../services/hooks';
import {
    DELETE_CONSTRUCTOR_INGREDIENT
} from '../../../services/constants/actionTypes';
import { ItemTypes } from '../../../services/constants/itemTypes';
import {
    ConstructorElement,
    DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient, TId } from "../../../services/types";
import styles from './ConstructorItemSwap.module.css';
const style = {
    cursor: 'move',
};

interface IConstructorItemSwap {
    itemData: TIngredient,
    type?: "top" | "bottom",
    isLocked?: boolean,
    handlerId: TId,
    index:  number,
    moveElem: (dragIndex: number, hoverIndex: number) => void,
    id: TId
};

const ConstructorItemSwap: FC<IConstructorItemSwap> = ({ itemData, index, isLocked, type, moveElem, id }) => {
    const dispatch = useDispatch();

    const handleClose = () => dispatch({ type: DELETE_CONSTRUCTOR_INGREDIENT, payload: index });

    const ref = useRef(null);

    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.FILLERS,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item: {id: string, index: number}, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex: number = item.index;
            const hoverIndex: number = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            //dispatch({ type: SWAP_CONSTRUCTOR_INGREDIENT, payload: { dragIndex, hoverIndex } })
            moveElem(dragIndex, hoverIndex);
           
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.FILLERS,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = 1; // TODO проработать позже логику перемещения прозрачности за элементом isDragging ? 0.2 : 1;
    drag(drop(ref));


    return (
        <li className={`${styles.item} pb-4 ${isLocked ? 'pl-8 pr-4' : 'pr-2'}`} ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId} >
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
                handleClose={handleClose}
            />
            {/* </div> */}
        </li>
    )
}

// ConstructorItemSwap.propTypes = {
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
//     type: PropTypes.string,
//     isLocked: PropTypes.bool
// };

export default ConstructorItemSwap;