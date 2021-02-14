import React, { ReactElement } from 'react';
import Home from 'pages/home';
import logo from 'assets/logo.svg';
import 'app/App.scss';

function App(): ReactElement {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
