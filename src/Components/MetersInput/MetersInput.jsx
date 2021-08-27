import React from "react";
import { shape, string, element } from "prop-types";

import styles from "./MetersInput.module.css";

const MetersInput = ({ title, field, icon, ...props }) => {
  const handleChange = ({ target: { value } }) => {
    const numberRgx = new RegExp('([0-9])+');

    if ((numberRgx.test(value) || value === "") && value < 100) {
      if (+field?.value === 0) return field?.onChange({ target:{ value, name: field?.name }});
      return field?.onChange({ target:{ value, name: field?.name }});
    }
  };

  return (
    <div className={styles.layout}>
      <p className={styles.title} data-testid="title">
        {title}
      </p>

      <div className={styles.container}>
        <input
          className={styles.value}
          type="number"
          value={field?.value || ""}
          onChange={e => handleChange(e)}
          data-testid="input"
          {...props}
        />
        <span className={styles.meters}>mts<sup>2</sup></span>
      </div>

      {icon && (
        <div className={styles.icon}>
          {icon}
        </div>
      )}
    </div>
  );
};

MetersInput.propTypes = {
  title: string,
  field: shape({}),
  icon: element,
};

MetersInput.defaultProps = {
  title: "Meters Input",
  field: {
    name: "",
    value: 0,
    onChange: () => {},
  },
  icon: null,
};

export default MetersInput;