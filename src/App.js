import React from "react";
import { Navigation} from "./Components";
import {
  AddPropertyContainer,
  PropertiesContainer,
} from "./Containers";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';

// TODO:
// - confirm on close ModalBlur
// - click card to open detail view
// - implement searchbar on Navbar
// - 

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" render={() => (
          <PropertiesContainer />
        )} />
        <Route path="/add" render={() => (
          <AddPropertyContainer />
        )} />
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
