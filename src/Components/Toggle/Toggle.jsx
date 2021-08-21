import React, { useState } from "react";
import { arrayOf, shape } from "prop-types";
import { classes } from "../../constants";

import styles from "./Toggle.module.css";

const Toggle = ({ options, initialSelected }) => {
  const [selected, setSelected] = useState(initialSelected || options[0].id);

  return options.length > 1 ? (
    <div className={styles.layout}>
      {options.map(option => (
        <button
          key={option.id}
          className={classes(
            styles.option,
            selected === option.id && styles.optionSelected
          )}
          // onClick={setSelected(option.id)}
        >
          {option.name}
        </button>
      ))}
    </div>
  ) : (
    <div className={styles.layout}>
      <p className={styles.error}>
        Toggle_Error: Ingresa más de dos opciones
      </p>
    </div>
  );
};

Toggle.propTypes = {
  options: arrayOf(shape({})),
};

Toggle.defaultProps = {
  options: [],
};

export default Toggle;