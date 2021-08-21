import React from "react";
import { Grid, Select, Toggle, NumberInput } from "../../Components";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faHome,

  faTree,
  faCity,
  faSwimmingPool,
} from '@fortawesome/free-solid-svg-icons'


import { PROPERTY_TYPES } from "../../constants";

import styles from "./PropertyForm.module.css";

const PropertyForm = ({ props }) => {
  const propertyOptions = PROPERTY_TYPES
    .map(pt => ({
      ...pt,
      icon: pt.id === 1 ? (
        <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
        ) : (
        <FontAwesomeIcon icon={faBuilding} className={styles.navIcon} />
      ),
    }));

  return (
    <div className={styles.layout}>
      <section>
        <h3>Type</h3>
        <Select options={propertyOptions} />
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
          <Toggle text="Pets allowed" />
          <Toggle text="Includes mainteinance" />
        </Grid>
      </section>

      <section>
        <button className={styles.submitBtn} >
          Create
        </button>
      </section>
    </div>
  );
};

PropertyForm.propTypes = {};

PropertyForm.defaultProps = {};

export default PropertyForm;