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
        <link href="https://fonts.googleapis.com/css?family=Gaegu&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Gamja+Flower&display=swap" rel="stylesheet" />
        <div className="brand">
          <h1 className="brandText">형님 노래방</h1>
        </div>
        <nav className="navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/index'} className="nav-link">Data</Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link">About</Link>
            </li>
          </ul>
        </nav>
         
        <div className="switch-div">
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/index' component={ Index } />
            <Route path='/about' component={ About } />
          </Switch>
        </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
