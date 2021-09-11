import React from "react";
import { string, func } from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from "./Header.module.css";

const Header = ({ title, onSearch }) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>
        {title}
      </h1>
      {onSearch && (
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search..."
          />
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  title: string,
  onSearch: func,
};

Header.defaultProps = {
  title: "Header",
  onSearch: null,
};

export default Header;