import React from "react";
import { arrayOf, shape } from "prop-types";
import { Header, EmptyList } from "../Components";
import PropertyList from "./PropertyList";
import { properties } from "../constants";

const PropertiesContainer = ({}) => {
  const handleSearch = () => {};

  return (
    <main>
      <Header title="Properties" onSearch={handleSearch} />
      {properties.length > 1 ? (
        <PropertyList properties={properties} />
      ) : (
        <EmptyList message="You have no properties, ¡try adding some!" />
      )}
    </main>
    );
};

PropertiesContainer.propTypes = {
};

PropertiesContainer.defaultProps = {
};

export default PropertiesContainer;