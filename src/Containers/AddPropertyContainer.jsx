import React from "react";
import { withRouter } from "react-router";
import { shape } from "prop-types";

import { ModalBlur } from "../Components";
import PropertyForm from "./PropertyForm/PropertyForm";

const AddPropertyContainer = ({ history }) => {
  const handleClose = () => {
    history.replace("/");
  };

  return (
    <ModalBlur
      title="Add Property"
      closeLabel="Cancel"
      onClose={handleClose}
    >
      <PropertyForm />
    </ModalBlur>
  );
};

AddPropertyContainer.propTypes = {
  history: shape({}).isRequired,
};

AddPropertyContainer.defaultProps = {
};

export default withRouter(AddPropertyContainer);