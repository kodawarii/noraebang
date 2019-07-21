import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './index.component'; 
import About from './about.component'; 
import Home from './home.component'; 

class InnerApp extends Component {

  render() {
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
            <span className="nav-padding-space-left"> </span>
            <span className="brandText">노래방DB</span>
            
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
              <li className="nav-padding-space-right"> </li>
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
}

export default InnerApp;