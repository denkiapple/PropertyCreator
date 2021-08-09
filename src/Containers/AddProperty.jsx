import React from "react";
import { arrayOf, shape } from "prop-types";
import { Header, PropertyForm } from "../Components";

const PropertiesContainer = () => {
  return (
    <main>
      <Header title="Add Property" />
      <PropertyForm />
    </main>
  );
};

PropertiesContainer.propTypes = {
};

PropertiesContainer.defaultProps = {
};

export default PropertiesContainer;