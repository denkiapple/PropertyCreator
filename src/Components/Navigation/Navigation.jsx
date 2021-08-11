import React from "react";
import {
  NavLink
} from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ props }) => {
  return (
    <div className={styles.layout}>
      <NavLink
        to="/dashboard"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/addproperty"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
        Add
      </NavLink>

      <NavLink
        to="/properties"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
        Properties
      </NavLink>
    </div>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;