import React from "react";
import { Grid, Toggle, NumberInput } from "../../Components";

import { PROPERTY_TYPES } from "../../constants";

import styles from "./PropertyForm.module.css";

const PropertyForm = ({ props }) => {
  return (
    <div className={styles.layout}>
      <section>
        <h3>Type</h3>
        <Toggle options={PROPERTY_TYPES} />
      </section>

      <section>
        <h3>Address</h3>
        <Grid>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Zip code</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Street</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Number (exterior)</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Number (interior)</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>City</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>State</label>
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
          <NumberInput title="Rooms" />
          <NumberInput title="Bathrooms" />        
          <NumberInput title="Parking spaces" />
        </Grid>
      </section>

      <section>
        <h3>Amenities</h3>
        <Grid>
          <div className={styles.inputContainer}>
            <label className={styles.label}>Pets allowed</label>
            <input className={styles.input} type="text"></input>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Includes mainteinance</label>
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