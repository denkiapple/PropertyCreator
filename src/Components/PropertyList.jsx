import React from "react";
import { arrayOf, shape } from "prop-types";

import styles from "./PropertyList.module.css";

const PropertyList = ({ properties }) => {
  const list = properties.map(property => (
    <div className={styles.card}>
      {property}
    </div>
  ));

  return (
    <div className={styles.layout}>
      {list}
    </div>
  );
};

PropertyList.propTypes = {
  properties: arrayOf(shape({})),
};

PropertyList.defaultProps = {
  properties: [],
};

export default PropertyList;