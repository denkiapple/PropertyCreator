import React from "react";
import { Grid } from "../Components";

import styles from "./PropertyForm.module.css";

const PropertyForm = ({ props }) => {
  return (
    <div className={styles.layout}>
      <Grid>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Zip code</label>
          <input className={styles.input} type="text"></input>
        </div>
      </Grid>
    </div>
  );
};

PropertyForm.propTypes = {};

PropertyForm.defaultProps = {};

export default PropertyForm;