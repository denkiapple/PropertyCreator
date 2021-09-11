import React from "react";
import { withRouter } from "react-router";
import { shape } from "prop-types"

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

const PropertiesContainer = ({ history }) => {
  const handleSearch = () => {};

  const list = properties.map(property => (
    <Card
      key={property.id}
      property={property}
    />
  ));

  const addIcon = <FontAwesomeIcon icon={faPlus} />;
  const handleAdd = () => history.push("/add");

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
      <Fab icon={addIcon} onClick={handleAdd} />
    </main>
    );
};

PropertiesContainer.propTypes = {
  history: shape({}).isRequired,
};

export default withRouter(PropertiesContainer);