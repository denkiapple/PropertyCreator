import React from "react";
import { arrayOf, shape } from "prop-types";
import { Header } from "../Components";
import PropertyForm from "./PropertyForm/PropertyForm";

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