import React, { Component } from 'react';

import { HashRouter, Switch, Route, Link } from 'react-router-dom';

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
 * [Properly-DONE-2019/08/06] @TODOCritical Add Hash Routes for gh-pages routing to work properly AND to use public assets properly without using kodawarii.github.com/index repo as storage
 * [DONE-2019/08/06] @TODO Change onROUTE states so that on refresh, nav blue bars are on correct nav item
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
      onBlog: false
    }
  }

  componentDidMount(){

    /**
     * 2019/08/06:
     * Current: Go to Index page, then refresh the application. Because of routing, the blue nav bar will be on home
     * Fix: On refresh, when the component mounts, check which route we are in, and underline the proper nav with blue line
     */
    let URL = window.location.href;
    let startIndex;
    for(var i = 0; i < URL.length; i++){
      if(URL.charAt(i) === '#'){
        startIndex = i + 2;
      }
    }
    
    let onPage = URL.slice(startIndex, URL.length);
    
    switch(onPage){
      case "home":
        this.setState({
          onHome: true,
          onIndex: false,
          onBlog: false
        });
        break;
      case "index":
        this.setState({
          onHome: false,
          onIndex: true,
          onBlog: false
        });
        break;
      case "blog":
        this.setState({
          onHome: false,
          onIndex: false,
          onBlog: true
        });
        break;
      default:
        break;
    }
    /**
     * End of Blue Nav Routing fix
     */

     // Do something else ...
     // ...
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
      <HashRouter>
        <div className="App">
          <header className="App-header">
          <link href="https://fonts.googleapis.com/css?family=Gaegu&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Raleway:100&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>

          <nav className="navbar">
            <span className="nav-padding-space-left"> </span>
            <span className="brandText">노래방DB</span>
            
            
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link to={'/'} className={"nav-link " + (this.state.onHome ? "nav-selected " : "")} onClick={this.toggleHome.bind(this)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className={"nav-link " + (this.state.onIndex ? "nav-selected " : "")} onClick={this.toggleIndex.bind(this)}>The DB</Link>
              </li>
              <li className="nav-item">
                <Link to={'/blog'} className={"nav-link " + (this.state.onBlog ? "nav-selected " : "")} onClick={this.toggleBlog.bind(this)}>Blog</Link>
              </li>
              <li className="nav-padding-space-right"> </li>
            </ul>

            
            <ul className="navbar-nav-s">
              <li className="nav-item">
                <Link to={'/'} className={"nav-link " + (this.state.onHome ? "nav-selected " : "")} onClick={this.toggleHome.bind(this)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className={"nav-link " + (this.state.onIndex ? "nav-selected " : "")} onClick={this.toggleIndex.bind(this)}>The DB</Link>
              </li>
              <li className="nav-item">
                <Link to={'/blog'} className={"nav-link " + (this.state.onBlog ? "nav-selected " : "")} onClick={this.toggleBlog.bind(this)}>Blog</Link>
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
      </HashRouter>
    );
  }
}

export default InnerApp;