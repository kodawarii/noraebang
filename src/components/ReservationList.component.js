import React, { Component } from 'react';

export default class ReservationList extends Component {
  render() {

    let cancelReserved = this.props.cancelReserved.bind(this);
    let processedList = this.props.reservationList.map(function(object, i){
        return <span className="song-item-outer" key={i}> 
        <span className="song-item-inner"> {object} </span>
        <span onClick={cancelReserved.bind(this, i)} className="x-sign"> ✖ </span>
        </span>
        
    });

    return (
      <div>
          <div className="currentHeaderContainerContainer">
            <span className="currentHeaderContainer"> 
                <span className="currentHeader"> 
                  <span className="playArrow">▷</span> 
                  <span className="currentHeaderTitle"> 지금재생: </span> 
                  <span className="currentSongName"><b>{this.props.currentVideoDetails}</b> </span>
                </span>
                <span className="currentHeader"> 
                  <span className="cancelBtn" onClick={this.props.cancelSong}> 최소 </span>
                </span>
            </span>
          </div>
          <div className="reserveContainerContainer">
            <div className="reserveContainer">
              <span className="reservedHeaderTitle"> 예약: </span>
              <span className="reserveBody">{processedList}</span>
            </div>
          </div>
      </div>
    );
  }
}