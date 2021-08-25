import React from "react";
import { shape, string } from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons'

import styles from "./NumberInput.module.css";

const NumberInput = ({ title, field }) => {
  const handleChange = value => {
    const event = {
      target: {
        value,
        name: field.name,
      }
    };
    field?.onChange(event);
  };

  const increment = () => field?.value < 99 && handleChange(field?.value + 1);
  const decrement = () => field?.value > 0 && handleChange(field?.value - 1);

  return (
    <div className={styles.layout}>
      <p className={styles.title} data-testid="title">
        {title}
      </p>

      <div className={styles.container}>
        <button className={styles.leftBtn} onClick={decrement} data-testid="sbsBtn" type="button">
          <FontAwesomeIcon icon={faMinus} className={styles.navIcon} />
        </button>

        <span className={styles.value} data-testid="value">
          {field?.value}
        </span>

        <button className={styles.rightBtn} onClick={increment} data-testid="addBtn" type="button">
          <FontAwesomeIcon icon={faPlus} className={styles.navIcon} />
        </button>
      </div>
    </div>
  );
};

NumberInput.propTypes = {
  title: string,
  field: shape({}),
};

NumberInput.defaultProps = {
  title: "Number Input",
  field: {
    name: "",
    value: 0,
    onChange: () => {},
  },
};

export default NumberInput;