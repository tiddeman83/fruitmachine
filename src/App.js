import React from 'react';
import SlotMachine from './SlotMachine';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fruit Machine</h1>
      </header>
      <main>
        <SlotMachine />
      </main>
    </div>
  );
}

export default App;