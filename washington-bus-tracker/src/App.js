import React from 'react';
import './App.css';
import BusPosition from './components/BusPosition';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Washington DC metro tracker
      </header>
      <BusPosition />
    </div>
  );
}

export default App;
