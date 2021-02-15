import React, { ReactElement } from 'react';
import Home from 'pages/home';
import nyTimes from 'assets/poweredby_nytimes_200a.png';
import nyTimesSmall from 'assets/poweredby_nytimes_30a.png';
import logo from 'assets/logo.svg';
import 'app/App.scss';

function App(): ReactElement {
  return (
    <div className="App">
      <div className="nav-bar">
        <div className="hamburger">
          <input type="checkbox" name="checkbox-nav" id="checkbox-nav" />
          <i>{/* icone */}</i>
          <nav>
            <a href="/home"> home </a>
            <a href="/about"> about </a>
          </nav>
        </div>
        <img className="logo" src={logo} alt="" />
        <img className="ny-times-small" src={nyTimesSmall} alt="" />
      </div>
      <Home />
      <a href="https://developer.nytimes.com">
        <img alt="" src={nyTimes} />
      </a>
    </div>
  );
}

export default App;
