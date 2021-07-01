import React, { useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import {
    DELETE_CONSTRUCTOR_INGREDIENT,
    SWAP_CONSTRUCTOR_INGREDIENT
} from '../../../services/constants/actionTypes';
import { ItemTypes } from '../../../services/constants/itemTypes';
import {
    ConstructorElement,
    DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from './ConstructorItemSwap.module.css';
const style = {
    cursor: 'move',
};
const ConstructorItemSwap = ({ itemData, index, isLocked, type, moveElem, id }) => {
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
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

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
            //console.log(`dragIndex - ${dragIndex} | hoverIndex - ${hoverIndex}`);
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
    const opacity = isDragging ? 1 : 1;
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

ConstructorItemSwap.propTypes = {
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

export default ConstructorItemSwap;