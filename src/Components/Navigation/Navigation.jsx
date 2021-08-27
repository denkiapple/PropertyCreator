import React from "react";
import {
  NavLink
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faHome,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

import styles from "./Navigation.module.css";

const Navigation = ({ props }) => {
  return (
    <div className={styles.layout}>
      <NavLink
        to="/properties"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
        <span className={styles.navLabel}>
          Properties
        </span>
        <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
      </NavLink>

      <NavLink
        to="/addproperty"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
        <span className={styles.navLabel}>
          Add
        </span>
        <FontAwesomeIcon icon={faPlus} className={styles.navIcon} />
      </NavLink>

      <NavLink
        to="/about"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
        <span className={styles.navLabel}>
          About
        </span>
        <FontAwesomeIcon icon={faInfoCircle} className={styles.navIcon} />
      </NavLink>
    </div>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;