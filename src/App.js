import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './components/index.component'; 
import About from './components/about.component'; 
import Home from './components/home.component'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <Link to={'/'} className="navbar-brand">노래방 데이터</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Data</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/about'} className="nav-link">About</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
         
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/index' component={ Index } />
              <Route path='/about' component={ About } />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
