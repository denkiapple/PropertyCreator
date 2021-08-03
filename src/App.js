import { Navigation } from "./Components";

import {
  AddProperty,
  PropertiesContainer
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
      <header className="App-header">
        <h1>Propiedulis</h1>
      </header>

      <Router>
        <Switch>
          <Route path="/addproperty" render={() => (
            <AddProperty />
          )} />
          <Route path="/properties" render={() => (
            <PropertiesContainer />
          )} />
          <Route path="/about" render={() => (
            <div>
              Acerca de
            </div>
          )} />
        </Switch>

        <Navigation />
      </Router>
    </div>
  );
}

export default App;
