import React, { Component } from 'react';

import './style-home.css';

export default class Home extends Component {

  clickFacebook(){
    console.log("Facebook Link clicked");
  }

  clickLinkedin(){
    console.log("Linkedin Link clicked");
  }

  clickGithub(){
    console.log("Github Link clicked");
  }

  clickInstagram(){
    console.log("Instagram Link clicked");
  }

  render() {
    return (
      <div className="home">
       <h1> Welcome to 노래방DB </h1>
       <div className="homeTextBody">
        <h3> Made with </h3>
          <span className="mongo"> MongoDB</span> 
          <span className="express"> Express</span> 
          <span className="react"> React</span> 
          <span className="node"> Node</span> 
        <h3> A Simple website created to display organise and manage music for TJ and KY</h3>
       </div>
       <br/><br/>
       <div className="contactIcons">
        <ul>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous"/>
          <li><i className="fab fa-facebook" onClick={this.clickFacebook.bind(this)}></i></li>
          <li><i className="fab fa-github-square" onClick={this.clickGithub.bind(this)}></i></li>
          <li><i className="fab fa-linkedin" onClick={this.clickLinkedin.bind(this)}></i></li>
          <li><i className="fab fa-instagram" onClick={this.clickInstagram.bind(this)}></i></li>
        </ul>
       </div>
      </div>
    );
  }

  /**
   * Add later
   * https://www.github.com/kodawarii
   * https://www.linkedin.com/in/paul-yoon-aya
   * https://www.instagram.com/risou_/
   */
}