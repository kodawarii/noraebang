import React, { Component } from 'react';

import './style-empty.css';

export default class Empty extends Component {

  render() {
    return (
      <div>
        <div className="loading">
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
        </div>
        <div className="loading-text">
          Loading
        </div>
      </div>
    );
  }
}