import React, { Component } from 'react';

import './style-about.css';

export default class About extends Component {

  render() {
    return (
      <div className="about">
        <h1>What is this?</h1>
        <div className="aboutTextBody">
          <h3> 
            An easy to access, easy to read collection of data for all the music I like to destroy my throat with at the K
          </h3>
          <h3>
            To put it simple, its a MERN CRUD application - a MongoDB Database, a Express/Node Backend Server and a React Front End
          </h3>
          <h3>
            
          </h3>
        </div>
      </div>
    );
  }
}