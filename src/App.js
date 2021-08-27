import { Navigation } from "./Components";

import {
  About,
  AddPropertyContainer,
  PropertiesContainer,
} from "./Containers";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/properties" render={() => (
            <PropertiesContainer />
          )} />
          <Route path="/addproperty" render={() => (
            <AddPropertyContainer />
          )} />
          <Route path="/about" render={() => (
            <About />
          )} />
          <Redirect to="/properties" />
        </Switch>

        <Navigation />
      </Router>
    </div>
  );
}

export default App;
