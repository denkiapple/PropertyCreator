import React from "react";
import { string } from "prop-types";
import styles from "./EmptyList.module.css";

const EmptyList = ({ message }) => {
  return (
    <div className={styles.layout}>
      {message}
    </div>
  );
};

EmptyList.propTypes = {
  message: string,
};

EmptyList.defaultProps = {
  message: "You have no items",
};

export default EmptyList;