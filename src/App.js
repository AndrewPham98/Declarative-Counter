import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HULK SMASH!!!! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    return (
        <h1>{counter}</h1>
    )
}

export default App;


export default App;
