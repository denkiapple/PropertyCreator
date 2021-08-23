import React from "react";
import { func, number, string, oneOfType, element } from "prop-types";

import styles from "./MetersInput.module.css";

const MetersInput = ({ title, value, onChange, icon }) => {
  return (
    <div className={styles.layout}>
      <p className={styles.title}>
        {title}
      </p>

      <div className={styles.container}>
        <input
          className={styles.value}
          type="number"
          value={value}
          onChange={onChange}
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
  value: number,
  onChange: func,
  icon: oneOfType([ element, null ]),
};

MetersInput.defaultProps = {
  title: "Meters Input",
  value: 0,
  onChange: () => {},
  icon: null,
};

export default MetersInput;