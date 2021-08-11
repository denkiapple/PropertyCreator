import React from "react";
import { arrayOf, shape } from "prop-types";
import { Header, EmptyList } from "../Components";
import PropertyList from "./PropertyList";

const PropertiesContainer = ({}) => {
  const properties = ["uno", "dos"];

  const handleSearch = () => {};

  return (
    <main>
      <Header title="Properties" onSearch={handleSearch} />
      {properties.length > 1 ? (
        <PropertyList properties={properties} />
      ) : (
        <EmptyList />
      )}
    </main>
    );
};

PropertiesContainer.propTypes = {
};

PropertiesContainer.defaultProps = {
};

export default PropertiesContainer;