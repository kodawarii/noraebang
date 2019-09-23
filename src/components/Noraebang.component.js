import React, { Component } from 'react';
import YouTube from 'react-youtube'; // npm install react-youtube

import SongList from './SongList.component';

import './style-noraebang.css';

export default class Noraebang extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentVideo: " ",
      queueOfDetails: [],
      queueOfIDs: [] // has list of youtube vid ID's
    };
  }

  makeReservation(artist, songname, id){
      this.state.queueOfDetails.push(artist + " - " + songname);
      this.state.queueOfIDs.push(id.slice(32, id.length));

      this.setState({currentVideo: id.slice(32, id.length)});
      console.log(this.state.queueOfDetails);
      console.log(this.state.queueOfIDs);
  }

  render() {
    const opts = {
        height: '480',
        width: '960',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

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
                videoId={this.state.currentVideo}
                opts={opts}
                onReady={this._onReady}
                />
            </div>
            <br/>
            <div className="reservationsList">
                Reserved Songs
            </div>
        </div>
        <div className="inprogress">
            <h3> mobile app coming soon ...</h3>
        </div>
      </div>
    );
  }
}