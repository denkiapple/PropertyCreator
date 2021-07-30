import React from "react";
import styles from "./EmptyList.module.css";

const EmptyList = () => {
  return (
    <div className={styles.layout}>
      No tienes propiedades, agrega alguna con el botón inferior.
    </div>
  );
};

export default EmptyList;