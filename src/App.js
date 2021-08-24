import { Navigation } from "./Components";

import {
  About,
  AddPropertyContainer,
  Dashboard,
  PropertiesContainer,
} from "./Containers";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard" render={() => (
            <Dashboard />
          )} />
          <Route path="/addproperty" render={() => (
            <AddPropertyContainer />
          )} />
          <Route path="/properties" render={() => (
            <PropertiesContainer />
          )} />
          <Route path="/about" render={() => (
            <About />
          )} />
        </Switch>

        <Navigation />
      </Router>
    </div>
  );
}

export default App;
