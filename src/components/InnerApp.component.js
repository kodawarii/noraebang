import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './index.component'; 
import Blog from './Blog.component'; 
import Home from './home.component'; 

/**
 * "Because Karaoke was too damn expensive, decided to buy my own equipment and make my own app"
 * 
 * [DONE] @TODO Mobile: Have Title and Artist only
 * @TODO Mobile: Click on item to expand and view more details
 * [DONE] @TODO Mobile: Table Header obstructed texts
 * [DONE] @TODO Loading page splash animation
 * [Not-required] @TODO Top Nav left and right padding for A4 document feel
 * @TODO Table headers to stay at top of page when scrolled past down it
 * [DONE] @TODO Nav 'Selected' bottom-border styling
 * @TODO Prod Page shows empty page when going to '/' page
 * [DONE-2019/07/30] @TODO Sorting - There are so many different ways to do this lol - Arrows/Dropdown selection (Execute in front end/back end, store in db or store in component states) etc
 * @TODO Change React App Logo and Titles for ALL apps
 * @TODO If Youtube link doesnt exist, dont show button for URL link
 * @TODO Add M/F for Key tab
 * 
 * [Not-required] @PBI Change content of home and about pages for prod
 * @PBI Convert to Karaoke App just straight up? with youtube playlist API and video embedded
 * @PBI change 'About' to 'Blog' on updates and major releases
 * @PBI Create Login/Authentication for Admin App - But noraebangbackend is only local and privately available
 * @PBI Search bar for searching ANY data from table
 * @PBI change mobile nav to hamburger (since blog link added now there is no real estate)
 * @PBI Heart Feature - "To Practice" "Hot" selection / Recently learnt etc - some sort of label 
 * 
 */

class InnerApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      onHome: true,
      onIndex: false,
      onBlog: false,
    }
  }

  toggleHome(){
    this.setState({
      onHome: true,
      onIndex: false,
      onBlog: false
    });
  }

  toggleIndex(){
    this.setState({
      onHome: false,
      onIndex: true,
      onBlog: false
    });
  }

  toggleBlog(){
    this.setState({
      onHome: false,
      onIndex: false,
      onBlog: true
    });
  }

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
              <li className="nav-item ">
                <Link to={'/'} className={"nav-link " + (this.state.onHome ? "nav-selected " : "")} onClick={this.toggleHome.bind(this)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className={"nav-link " + (this.state.onIndex ? "nav-selected " : "")} onClick={this.toggleIndex.bind(this)}>Data</Link>
              </li>
              <li className="nav-item">
                <Link to={'/blog'} className={"nav-link " + (this.state.onBlog ? "nav-selected " : "")} onClick={this.toggleBlog.bind(this)}>About</Link>
              </li>
              <li className="nav-padding-space-right"> </li>
            </ul>

            
            <ul className="navbar-nav-s">
              <li className="nav-item">
                <Link to={'/'} className={"nav-link " + (this.state.onHome ? "nav-selected " : "")} onClick={this.toggleHome.bind(this)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className={"nav-link " + (this.state.onIndex ? "nav-selected " : "")} onClick={this.toggleIndex.bind(this)}>Data</Link>
              </li>
              <li className="nav-item">
                <Link to={'/blog'} className={"nav-link " + (this.state.onBlog ? "nav-selected " : "")} onClick={this.toggleBlog.bind(this)}>About</Link>
              </li>
            </ul>
          </nav>
          </header>


          <div className="switch-div">
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/index' component={ Index } />
              <Route path='/blog' component={ Blog } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default InnerApp;