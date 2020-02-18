import React from 'react';
import './App.css';
import Header from './components/header'

function App() {
  return (
    <div className="App">
          <Header />

      <form>
        <h2>Book Now!</h2>
        <label>FROM</label>
        <input></input>
        <label>TO</label>
        <input></input>
        <label>LEAVING</label>
        <input></input>
        <button>Find Tickets</button>

      </form>

    </div>
  );
}

export default App;
