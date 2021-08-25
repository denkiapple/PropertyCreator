import React from "react";
import { Formik, Form, Field } from "formik";

import {
  Grid,
  Select,
  MetersInput,
  NumberInput,
  Toggle,
} from "../../Components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faHome,
  faCity,
  faQuestion,

  faTree,
  faSwimmingPool,
} from '@fortawesome/free-solid-svg-icons'

import { PROPERTY_TYPES } from "../../constants";

import styles from "./PropertyForm.module.css";

const PropertyForm = ({ props }) => {
  const lotIcon = <FontAwesomeIcon icon={faTree} className={styles.navIcon} />;
  const commonIcon = <FontAwesomeIcon icon={faSwimmingPool} className={styles.navIcon} />;
  const buildIcon = <FontAwesomeIcon icon={faBuilding} className={styles.navIcon} />;

  const iconSelector = id => {
    switch(id) {
      case 1:
        return <FontAwesomeIcon icon={faHome} className={styles.navIcon} />;
      case 2:
        return <FontAwesomeIcon icon={faBuilding} className={styles.navIcon} />;
      case 3:
        return <FontAwesomeIcon icon={faCity} className={styles.navIcon} />;
      default:
        return <FontAwesomeIcon icon={faQuestion} className={styles.navIcon} />;
    }
  };

  const propertyOptions = PROPERTY_TYPES
    .map(pt => ({
      ...pt,
      icon: iconSelector(pt.id),
    }));

  const handlePropertyCreation = values => {
    console.log(values);
  };

  return (
    <Formik
      className={styles.layout}
      onSubmit={handlePropertyCreation}
      initialValues={{
        rooms: 0,
        bathrooms: 0,
        parking: 0,
      }}
    >
      {() => (
        <Form>
          <section>
            <h3>Type</h3>
            <Field
              component={Select}
              name="type"
              options={propertyOptions}
              initialSelected={1}
            />
          </section>
  
          <section>
            <h3>Address</h3>
            <Grid>
              <div className={styles.inputContainer}>
                <label className={styles.label}>Zip code</label>
                <input className={styles.input} type="text" name="zipCode"></input>
              </div>
  
              <div className={styles.inputContainer}>
                <label className={styles.label}>Street</label>
                <input className={styles.input} type="text" name="street"></input>
              </div>
  
              <div className={styles.inputContainer}>
                <label className={styles.label}>Number (exterior)</label>
                <input className={styles.input} type="text" name="extNumber"></input>
              </div>
  
              <div className={styles.inputContainer}>
                <label className={styles.label}>Number (interior)</label>
                <input className={styles.input} type="text" name="intNumber"></input>
              </div>
  
              <div className={styles.inputContainer}>
                <label className={styles.label}>City</label>
                <input className={styles.input} type="text" name="city"></input>
              </div>
  
              <div className={styles.inputContainer}>
                <label className={styles.label}>State</label>
                <input className={styles.input} type="text" name="state"></input>
              </div>
            </Grid>
          </section>
  
          <section>
            <h3>Areas</h3>
            <Grid>
              <div className={styles.inputContainer}>
                <Field
                  name="lotSize"
                  component={MetersInput}
                  title="Lot size"
                  icon={lotIcon}
                />
              </div>
  
              <div className={styles.inputContainer}>
                <Field
                  name="constructionSize"
                  component={MetersInput}
                  title="Construction size"
                  icon={buildIcon}
                />
              </div>
  
              <div className={styles.inputContainer}>
                <Field
                  name="shaeredSize"
                  component={MetersInput}
                  title="Shared spaces"
                  icon={commonIcon}
                />
              </div>
            </Grid>
          </section>
  
          <section>
            <h3>Characteristics</h3>
            <Grid>
              <Field name="rooms" component={NumberInput} title="Rooms" />
              <Field name="bathrooms" component={NumberInput} title="Bathrooms" />        
              <Field name="parking" component={NumberInput} title="Parking spaces" />
            </Grid>
          </section>

          <section>
            <h3>Amenities</h3>
            <Grid>
              <Field name="pets" component={Toggle} text="Pets allowed" />
              <Field name="maintenance" component={Toggle} text="Includes mainteinance" />
            </Grid>
          </section>
  
          <section>
            <button className={styles.submitBtn} >
              Create
            </button>
          </section>
        </Form>
      )}
    </Formik>
  );
};

PropertyForm.propTypes = {};

PropertyForm.defaultProps = {};

export default PropertyForm;