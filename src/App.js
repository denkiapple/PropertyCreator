import React from "react";
import { ModalBlur , Navigation} from "./Components";
import {
  AddPropertyContainer,
  PropertiesContainer,
} from "./Containers";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/properties" render={() => (
          <PropertiesContainer />
        )} />
        <Route path="/properties/add" render={() => (
          <ModalBlur>
            <AddPropertyContainer />
          </ModalBlur>
        )} />
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
