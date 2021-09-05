import React from "react";
import { Header } from "../Components";
import PropertyForm from "./PropertyForm/PropertyForm";

const AddPropertyContainer = () => {
  return (
    <>
      <Header title="Add Property" />
      <PropertyForm />
    </>
  );
};

AddPropertyContainer.propTypes = {
};

AddPropertyContainer.defaultProps = {
};

export default AddPropertyContainer;