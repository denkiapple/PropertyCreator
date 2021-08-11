import React from "react";
import { arrayOf, shape } from "prop-types";
import { Header } from "../Components";

const Dashboard = () => {
  return (
    <main>
      <Header title="Dashboard" />
    </main>
  );
};

Dashboard.propTypes = {
};

Dashboard.defaultProps = {
};

export default Dashboard;