import React from "react";
import { arrayOf, oneOfType, element, shape } from "prop-types";

import styles from "./Grid.module.css";

const Grid = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: arrayOf(oneOfType([element, shape({})])),
};

Grid.defaultProps = {
  children: [],
};

export default Grid;