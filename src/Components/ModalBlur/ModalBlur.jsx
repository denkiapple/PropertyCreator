import React from "react";
import { oneOfType, arrayOf, element } from "prop-types";

import styles from "./ModalBlur.module.css";

const ModalBlur = ({ children }) => {
  return (
    <>
      {children && (
        <div className={styles.layout}>
          {children}
        </div>
      )}
      <div className={styles.overlay}></div>
    </>
  );
};

ModalBlur.propTypes = {
  children: oneOfType([ element, arrayOf(element) ]),
};

ModalBlur.defaultProps = {
  children: {},
};

export default ModalBlur;