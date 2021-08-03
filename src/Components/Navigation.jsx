import React from "react";
import {
  Link
} from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ props }) => {
  return (
    <div className={styles.layout}>
      <Link to="/addproperty" className={styles.button}>
        Add
      </Link>
    </div>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;