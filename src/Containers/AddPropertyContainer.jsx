import React from "react";
import { arrayOf, shape } from "prop-types";
import { Header } from "../Components";
import PropertyForm from "./PropertyForm/PropertyForm";

const AddPropertyContainer = () => {
  return (
    <main>
      <Header title="Add Property" />
      <PropertyForm />
    </main>
  );
};

AddPropertyContainer.propTypes = {
};

AddPropertyContainer.defaultProps = {
};

export default AddPropertyContainer;