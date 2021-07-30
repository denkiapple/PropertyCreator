import { Navigation, PropertyList, EmptyList } from "./Components";

import './App.css';

function App() {
  const properties = ["uno", "dos"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Propiedulis</h1>
      </header>

      {properties.length > 1 ? (
        <PropertyList properties={properties} />
      ) : (
        <EmptyList />
      )}

      <Navigation />
    </div>
  );
}

export default App;
