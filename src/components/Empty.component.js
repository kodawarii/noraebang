import React, { Component } from 'react';

import './style-empty.css';
import './style-empty-nb.css';

export default class Empty extends Component {

  render() {

    let toShow;
    console.log(this.props.isnoraebang);
    if(this.props.isnoraebang){
      toShow = <div>
          <div className="loading-nb">
            <div className="obj-nb"></div>
            <div className="obj-nb"></div>
            <div className="obj-nb"></div>
            <div className="obj-nb"></div>
            <div className="obj-nb"></div>
            <div className="obj-nb"></div>
          </div>
          <div className="loading-text-nb">
            Loading
          </div>
        </div>
      
    }
    else{
      toShow = <div>
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
      
    }
    return (
      <div>
        {toShow}
      </div>
    );
  }
}