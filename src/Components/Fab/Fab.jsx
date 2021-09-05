import React from "react";
import { string, element, func } from "prop-types";
import styles from "./Fab.module.css";

const Fab = ({ title, icon, onClick }) => {
  return (
    <button className={styles.layout} data-testid="fabBtn" onClick={onClick}>
      {icon ? icon : title}
    </button>
  );
};

Fab.propTypes = {
  title: string,
  icon: element,
  onClick: func,
};

Fab.defaultProps = {
  title: "Fab",
  icon: null,
  onClick: () => {},
};

export default Fab;