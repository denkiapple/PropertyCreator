import React from "react";
import { arrayOf, shape } from "prop-types";

import { Card, Grid } from "../Components";

const PropertyList = ({ properties }) => {
  const list = properties.map(property => (
    <Card
      key={property.id}
      property={property}
    />
  ));

  return (
    <Grid>
      {list}
    </Grid>
  );
};

PropertyList.propTypes = {
  properties: arrayOf(shape({})),
};

PropertyList.defaultProps = {
  properties: [],
};

export default PropertyList;