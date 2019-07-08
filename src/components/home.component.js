import React, { Component } from 'react';

import './style-home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="home">
       <h1> Welcome to 형님 노래방 </h1>
       <h3> A Full Stack Web Page created from scratch using 
        <span className="mongo"> MongoDB</span> 
        <span className="express"> Express</span> 
        <span className="react"> React</span> 
        <span className="node"> Node</span> </h3>
       <h3> Created to make my life so much easier when searching for my favourite songs at TJ and KY </h3>
      </div>
    );
  }
}