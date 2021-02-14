import React, { ReactElement } from 'react';
import Home from 'pages/home';
import logo from 'assets/logo.svg';
import 'app/App.scss';

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.tsx </code>
          and save to reload.
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
      <Home />
    </div>
  );
}

export default App;
