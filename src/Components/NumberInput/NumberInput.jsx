import React from "react";
import { func, number, string } from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons'

import styles from "./NumberInput.module.css";

const NumberInput = ({ title, value, onChange }) => {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    onChange(value - 1);
  };

  return (
    <div className={styles.layout}>
      <p className={styles.title}>
        {title}
      </p>

      <div className={styles.container}>
        <button className={styles.leftBtn} onClick={decrement}>
          <FontAwesomeIcon icon={faMinus} className={styles.navIcon} />
        </button>
        <span className={styles.value}>{value}</span>
        <button className={styles.rightBtn} onClick={increment}>
          <FontAwesomeIcon icon={faPlus} className={styles.navIcon} />
        </button>
      </div>
    </div>
  );
};

NumberInput.propTypes = {
  title: string,
  value: number,
  onChange: func,
};

NumberInput.defaultProps = {
  title: "Number Input",
  value: 0,
  onChange: () => {},
};

export default NumberInput;