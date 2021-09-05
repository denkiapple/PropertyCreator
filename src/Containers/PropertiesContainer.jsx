import React from "react";
import {
  Header,
  Fab,
  EmptyList,
  Card,
  Grid,
} from "../Components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { properties } from "../constants";

const PropertiesContainer = () => {
  const handleSearch = () => {};

  const list = properties.map(property => (
    <Card
      key={property.id}
      property={property}
    />
  ));

  const addIcon = <FontAwesomeIcon icon={faPlus} />;

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
      <Fab icon={addIcon} />
    </main>
    );
};

export default PropertiesContainer;