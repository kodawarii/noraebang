import React, { Component } from 'react';

import './style-about.css';

export default class About extends Component {

  render() {
    return (
      <div className="about">
        <h1>What is this?</h1>
        <h3> 
          An easy to access, easy to read data collection of all the music I like to destroy my throat with at the K
        </h3>
        <h3>
          To put it simple, its a MERN CRUD application - MongoDB Database, Express/Node Backend Server and a React Front End
        </h3>
        <h3>
          Things I learnt (self taught) and used:
        </h3>
        <p>
          HTML/CSS/JavaScript NoSQL HTTP Methods Git Source Control RESTful API Host Deployment mLab Azure AWS
        </p>
      </div>
    );
  }
}