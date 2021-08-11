import React from "react";
import { string, oneOfType, func } from "prop-types";

import styles from "./Header.module.css";

const Header = ({ title, onSearch }) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>
        {title}
      </h1>
      {onSearch && (
        <div className={styles.inputContainer}>
          <input className={styles.input} type="text"></input>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  title: string,
  onSearch: oneOfType([func, null]),
};

Header.defaultProps = {
  title: "Header",
  onSearch: null,
};

export default Header;