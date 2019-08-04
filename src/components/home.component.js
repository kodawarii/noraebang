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
       <div className="homeTextBody">
       <link href="https://fonts.googleapis.com/css?family=Raleway:100&display=swap" rel="stylesheet"/>
        <p className="mainHeading"> Welcome to NoraebangDB </p>
        <p className="regularTextBlock"> Developed with </p>
          <span className="mongo tech"> MongoDB</span> 
          <span className="express tech"> Express</span> 
          <span className="react tech"> React</span> 
          <span className="node tech"> Node</span> 
        <p className="regularTextBlock"> A website created to display organise and manage music data for TJ and KY</p>
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