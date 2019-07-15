import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './components/index.component'; 
import About from './components/about.component'; 
import Home from './components/home.component'; 

/**
 * @TODO Decrease padding for nav for mobile - theres like no space to view table because of over sized nav height
 */

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Gaegu&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Gamja+Flower&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Gothic+A1&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Gaegu&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Gamja+Flower&display=swap" rel="stylesheet" />

        <nav className="navbar">
          <span className="brandText">형님 노래방</span>
          
          <ul className="navbar-nav">
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

          
          <ul className="navbar-nav-s">
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
        </header>
        <div className="switch-div">
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/index' component={ Index } />
            <Route path='/about' component={ About } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
