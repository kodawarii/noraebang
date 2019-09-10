import React, { Component } from 'react';

import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Index from './index.component'; 
import Blog from './Blog.component'; 
import Home from './home.component'; 

/**
 * "Because Karaoke was too damn expensive, decided to buy my own equipment and make my own app"
 * 
 */

class InnerApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      onHome: true,
      onIndex: false,
      onBlog: false,

      hamburgerOpen: false
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

  openHamburger(){
    if(this.state.hamburgerOpen){
      this.setState({hamburgerOpen: false});
    }
    else{
      this.setState({hamburgerOpen: true});
    }
  }

  render() {
    return (
      <HashRouter>
        
          <header>
            <link href="https://fonts.googleapis.com/css?family=Gaegu&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Raleway:100&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>

            <nav className="navbar">
              <span className="brandText">노래방DB</span>
              
              <ul className="navbar-ul">
                <li className="nav-item">
                  <Link to={'/'} className={"nav-link " + (this.state.onHome ? "nav-selected " : "")} onClick={this.toggleHome.bind(this)}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className={"nav-link " + (this.state.onIndex ? "nav-selected " : "")} onClick={this.toggleIndex.bind(this)}>The DB</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className={"nav-link " + (this.state.onIndex ? "nav-selected " : "")} onClick={this.toggleIndex.bind(this)}>Noraebang</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/blog'} className={"nav-link " + (this.state.onBlog ? "nav-selected " : "")} onClick={this.toggleBlog.bind(this)}>Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/blog'} className={"nav-link " + (this.state.onBlog ? "nav-selected " : "")} onClick={this.toggleBlog.bind(this)}>Login</Link>
                </li>
                <li className="nav-padding-space-right"> </li>
              </ul>
            </nav>
            
            <nav className="navbar-s">
                <span className="brandText-s">노래방DB</span>
                <span onClick={this.openHamburger.bind(this)} className="hamburger">☰</span> 
                
                <br/><br/>
    
                <ul className={"navbar-s-ul " + (this.state.hamburgerOpen ? "navbar-s-ul-open" : "")}>
                  <li className="nav-item-s">
                    <Link to={'/'} className={"nav-link " + (this.state.onHome ? "nav-selected-s " : "")} onClick={this.toggleHome.bind(this)}>Home</Link>
                  </li>
                  <li className="nav-item-s">
                    <Link to={'/index'} className={"nav-link " + (this.state.onIndex ? "nav-selected-s " : "")} onClick={this.toggleIndex.bind(this)}>The DB</Link>
                  </li>
                  <li className="nav-item-s">
                    <Link to={'/index'} className={"nav-link " + (this.state.onIndex ? "nav-selected-s " : "")} onClick={this.toggleIndex.bind(this)}>Noraebang</Link>
                  </li>
                  <li className="nav-item-s">
                    <Link to={'/blog'} className={"nav-link " + (this.state.onBlog ? "nav-selected-s " : "")} onClick={this.toggleBlog.bind(this)}>Blog</Link>
                  </li>
                  <li className="nav-item-s">
                    <Link to={'/blog'} className={"nav-link " + (this.state.onBlog ? "nav-selected-s " : "")} onClick={this.toggleBlog.bind(this)}>Login</Link>
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
        
      </HashRouter>
    );
  }
}

export default InnerApp;