import React, { ReactElement } from 'react';
import Home from 'pages/home';
import nyTimes from 'assets/poweredby_nytimes_200a.png';
import 'app/App.scss';

function App(): ReactElement {
  return (
    <div className="App">
      <Home />
      <a href="https://developer.nytimes.com">
        <img alt="" src={nyTimes} />
      </a>
    </div>
  );
}

export default App;
