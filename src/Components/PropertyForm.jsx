import React from "react";
import styles from "./PropertyForm.module.css";

const PropertyForm = ({ props }) => {
  return (
    <div className={styles.layout}>
      <h3>
        Add Property
      </h3>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Zip code</label>
        <input className={styles.input} type="text"></input>
      </div>
    </div>
  );
};

PropertyForm.propTypes = {};

PropertyForm.defaultProps = {};

export default PropertyForm;