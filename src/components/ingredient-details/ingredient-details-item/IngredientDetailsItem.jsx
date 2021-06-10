import React from "react";

import PropTypes from 'prop-types';
import styles from './IngredientDetailsItem.module.css';

const IngredientDetailsItem = ({ title, value }) => (
    <li className={styles.details_list_item}>
        <p className="text text_type_main-default text_color_inactive">
            {title}
        </p>
        <p className="text text_type_digits-default text_color_inactive">
            {value}
        </p>
    </li>
);

IngredientDetailsItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default IngredientDetailsItem;