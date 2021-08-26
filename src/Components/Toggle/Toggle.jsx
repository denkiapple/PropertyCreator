import React from "react";
import { string, shape } from "prop-types";
import { classes } from "../../constants";

import styles from "./Toggle.module.css";

const Toggle = ({ text, field }) => {
  const toggle = () => {
    const event = { target: { value: !field?.value, name: field.name } };
    field?.onChange(event);
  };

  return (
    <div className={styles.layout}>
      <p data-testid="text">
        {text || field?.name}
      </p>
      
      <button
        type="button"
        className={classes(
          styles.toggler,
          field?.value && styles.togglerOn
        )}
        onClick={toggle}
        data-testid="button"
      >
        <div className={classes(
          styles.bolis,
          field?.value && styles.bolisOn,
        )}></div>
      </button>
    </div>
  );
};

Toggle.propTypes = {
  text: string,
  field: shape({}),
};

Toggle.defaultProps = {
  text: "Placehoder",
  field: {
    name: "",
    value: 0,
    onChange: () => {},
  },
};

export default Toggle;