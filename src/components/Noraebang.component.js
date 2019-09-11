import React, { Component } from 'react';
import YouTube from 'react-youtube'; // npm install react-youtube

import Index from './index.component';

import './style-noraebang.css';

export default class Noraebang extends Component {

  render() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };

    return (
      <div className="noraebang">
        <h1>KARAOKE APP</h1>
        <div className="listOfSongsOuter">
            <div className="listOfSongs">
                <Index />
            </div>
        </div>
        <div className="youtubeScreenOuter">
            <div className="youtubeScreen"> 
                 <YouTube
                    videoId="NEaA_aEvKBA"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        </div>
      </div>
    );
  }
}