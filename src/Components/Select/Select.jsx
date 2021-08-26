import React, { useState } from "react";
import { arrayOf, shape, number } from "prop-types";
import { classes } from "../../constants";

import styles from "./Select.module.css";

const Select = ({ options, initialSelected, field }) => {
  const initVal = initialSelected !== undefined ? initialSelected : options[0].id;
  const [selected, setSelected] = useState(initVal);

  return options.length > 1 ? (
    <div className={styles.layout} data-testid="fullLayout">
      {options.map(option => (
        <button
          key={option.id}
          type="button"
          className={classes(
            styles.option,
            selected === option.id && styles.optionSelected
          )}
          onClick={() => {
            const event = { target: { value: option.id, name: field?.name } }
            field?.onChange(event);
            setSelected(option.id);
          }}
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
    <div className={styles.layout} data-testid="emptyLayout">
      <p className={styles.error}>
        Select_Error: Ingresa más de dos opciones
      </p>
    </div>
  );
};

Select.propTypes = {
  options: arrayOf(shape({})),
  initialSelected: number,
  field: shape({}),
};

Select.defaultProps = {
  options: [],
  initialSelected: 0,
  field: {
    onChange: () => {},
  }
};

export default Select;