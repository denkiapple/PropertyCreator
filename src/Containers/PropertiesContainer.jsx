import React from "react";
import { arrayOf, shape } from "prop-types";
import { Header, EmptyList, Card, Grid } from "../Components";
import { properties } from "../constants";

const PropertiesContainer = ({}) => {
  const handleSearch = () => {};

  const list = properties.map(property => (
    <Card
      key={property.id}
      property={property}
    />
  ));

  return (
    <main>
      <Header title="Properties" onSearch={handleSearch} />
      {properties.length >= 1 ? (
        <Grid>
          {list}
        </Grid>
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