import React, { Component } from 'react';
import YouTube from 'react-youtube'; // npm install react-youtube

import SongList from './SongList.component';

import './style-noraebang.css';

export default class Noraebang extends Component {

  constructor(props){
    super(props);
    this.state = {
      updater: "",
      videoHeight: 680,
      videoWidth: 1200,
      currentVideoID: "lFy3b98_lIc",
      currentVideoDetails: "사랑비",
      queueOfDetails: [],
      queueOfIDs: [] // has list of youtube vid ID's
    };
  }

  componentDidMount(){
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if(window.innerWidth >= 1850){
      this.setState({videoWidth: 1200});
      this.setState({videoHeight: 680});
    }
    else if(window.innerWidth <= 1550){
      this.setState({videoWidth: 620});
      this.setState({videoHeight: 430});
    }
    else if(window.innerWidth <= 1850){
      this.setState({videoWidth: 900});
      this.setState({videoHeight: 550});
    }   
}

  makeReservation(artist, songname, id){
      this.state.queueOfDetails.push(songname);
      this.state.queueOfIDs.push(id.slice(32, id.length));

      this.setState({updater: "x"});

      //this.setState({currentVideoID: id.slice(32, id.length)});
      //this.setState({currentVideoDetails: artist + songname});
      console.log(this.state.queueOfDetails);
      console.log(this.state.queueOfIDs);
  }

  playNextSong(){
    console.log(this.state.queueOfIDs);
    this.setState({currentVideoID: this.state.queueOfIDs.shift()});
    this.setState({currentVideoDetails: this.state.queueOfDetails.shift()});
  }

  render() {
    const opts = {
        height: this.state.videoHeight,
        width: this.state.videoWidth,
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        },
    };

    let reservationList = "";
    for(var i = 0; i < this.state.queueOfDetails.length; i++){
      reservationList += this.state.queueOfDetails[i] + " | ";
    }

    return (
      <div className="noraebang">
        <div className="listOfSongsOuter">
            <div className="listOfSongs">
                <SongList 
                makeReservation={this.makeReservation.bind(this)}
                />
            </div>
        </div>
        <div className="youtubeScreenOuter">
            <div className="youtubeScreen"> 
                <YouTube
                videoId={this.state.currentVideoID}
                opts={opts}
                onReady={this._onReady}
                onEnd={this.playNextSong.bind(this)}
                />
            </div>
            <br/>
            <div className="reservationsList">
              Current: {this.state.currentVideoDetails}
            </div>
            <div className="reservationsList">
              <h3> Reserved Songs </h3>
              {reservationList}
            </div>
        </div>
        <div className="inprogress">
            <h3> mobile app coming soon ...</h3>
        </div>
      </div>
    );
  }
}