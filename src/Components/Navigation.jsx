import React from "react";
import styles from "./Navigation.module.css";

const Navigation = ({ props }) => {
  return (
    <div className={styles.layout}>
      <button className={styles.button}>
        Add
      </button>
    </div>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;