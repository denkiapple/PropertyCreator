import React from "react";
import { arrayOf, shape } from "prop-types";
import { PropertyList, EmptyList } from "../Components";

const PropertiesContainer = ({}) => {
  const properties = ["uno", "dos"];

  return properties.length > 1 ? (
      <PropertyList properties={properties} />
    ) : (
      <EmptyList />
    );
};

PropertiesContainer.propTypes = {
};

PropertiesContainer.defaultProps = {
};

export default PropertiesContainer;