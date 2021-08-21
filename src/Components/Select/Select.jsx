import React, { useState } from "react";
import { arrayOf, shape, number } from "prop-types";
import { classes } from "../../constants";

import styles from "./Select.module.css";

const Select = ({ options, initialSelected }) => {
  const [selected, setSelected] = useState(initialSelected !== undefined ? initialSelected : options[0].id);

  return options.length > 1 ? (
    <div className={styles.layout}>
      {options.map(option => (
        <button
          key={option.id}
          className={classes(
            styles.option,
            selected === option.id && styles.optionSelected
          )}
          onClick={() => setSelected(option.id)}
        >
          {option.icon && (
            <div className={styles.iconContainer}>
              {option.icon}
            </div>
          )}
          {option.name}
        </button>
      ))}
    </div>
  ) : (
    <div className={styles.layout}>
      <p className={styles.error}>
        Select_Error: Ingresa más de dos opciones
      </p>
    </div>
  );
};

Select.propTypes = {
  options: arrayOf(shape({})),
  initialSelected: number,
};

Select.defaultProps = {
  options: [],
  initialSelected: 0,
};

export default Select;