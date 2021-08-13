import React from "react";
import { Grid } from "../Components";

import styles from "./PropertyForm.module.css";

const PropertyForm = ({ props }) => {
  return (
    <div className={styles.layout}>
      <section>
        <h3>Type</h3>
      </section>

      <section>
        <h3>Location</h3>
        <Grid>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Zip code</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Street name</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Number (ext)</label>
            <input className={styles.input} type="text"></input>
          </div>
        </Grid>
      </section>

      <section>
        <h3>Areas</h3>
        <Grid>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Lot size</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Construction size</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Shared spaces</label>
            <input className={styles.input} type="text"></input>
          </div>
        </Grid>
      </section>

      <section>
        <h3>Characteristics</h3>
        <Grid>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Rooms</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Bathrooms</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Parking spaces</label>
            <input className={styles.input} type="text"></input>
          </div>
        </Grid>
      </section>
    </div>
  );
};

PropertyForm.propTypes = {};

PropertyForm.defaultProps = {};

export default PropertyForm;