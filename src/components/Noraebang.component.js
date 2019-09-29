import React, { Component } from 'react';
import YouTube from 'react-youtube'; // npm install react-youtube

import SongList from './SongList.component';
import ReservationList from './ReservationList.component';

import './style-noraebang.css';

// Use-case Laptop: 1366px x 768px

export default class Noraebang extends Component {

  constructor(props){
    super(props);
    this.state = {
      updater: "",
      videoHeight: 450,
      videoWidth: 916,
      autoPlay: 1,
      currentVideoID: "RHUSmCcoCtQ",
      currentVideoDetails: "노래방",
      queueOfDetails: [],
      queueOfIDs: []
    };
  }

  componentDidMount(){
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if(window.innerWidth >= 1850 && window.innerHeight >= 969){
      this.setState({videoWidth: 1200});
      this.setState({videoHeight: 650});
    }
    else if(window.innerWidth <= 1700){
      this.setState({videoWidth: 916});
      this.setState({videoHeight: 450});
    }
    else if(window.innerWidth <= 1850){
      this.setState({videoWidth: 1000});
      this.setState({videoHeight: 550});
    }   
}

  makeReservation(artist, songname, id){
      this.state.queueOfDetails.push(songname);
      this.state.queueOfIDs.push(id.slice(32, id.length));

      this.setState({updater: "x"});
  }

  playNextSong(){
    this.setState({
      currentVideoID: this.state.queueOfIDs.shift(),
      currentVideoDetails: this.state.queueOfDetails.shift()
    });
  }

  startSong(){
    this.setState({autoPlay: 1});
  }

  cancelCurrentSong(){
    this.setState({
      currentVideoID: this.state.queueOfIDs.shift(), 
      currentVideoDetails: this.state.queueOfDetails.shift(),
      autoPlay: 0
    });
  }

  cancelReserved(index){
    this.state.queueOfIDs.splice(index, 1);
    this.state.queueOfDetails.splice(index, 1);
    this.setState({updater: "x"});
  }

  render() {
    const opts = {
        height: this.state.videoHeight,
        width: this.state.videoWidth,
        playerVars: {
          autoplay: this.state.autoPlay
        },
    };

    return (
      <div className="noraebang">
        <h2 className="noraebangHeader"> 노래방 </h2>
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
              <ReservationList
              reservationList = {this.state.queueOfDetails}
              currentVideoDetails = {this.state.currentVideoDetails}
              cancelSong = {this.cancelCurrentSong.bind(this)}
              nextSong = {this.startSong.bind(this)}
              cancelReserved = {this.cancelReserved.bind(this)}
              />
            </div>
        </div>
        <div className="inprogress">
            <h3> mobile app coming soon ... (If you are on desktop Press F11 and go full screen - available only for >1365px) </h3>
        </div>
      </div>
    );
  }
}