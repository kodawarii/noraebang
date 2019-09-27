import React, { Component } from 'react';

export default class ReservationList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nothing: ""
    };
  }

  render() {

    let counterString = "";
    let processedList = this.props.reservationList.map(function(object){
        counterString += object;
        console.log(counterString.length);
        if(counterString.length > 76){
            return null;
        }
        else{
            return <span className="song-item-outer"> 
            <span className="song-item-inner"> {object} </span> 
            </span>
        }
    });

    return (
      <div>
          <div className="currentHeaderContainerContainer">
            <span className="currentHeaderContainer"> 
                <span className="currentHeader"> <span className="playArrow">▷</span> 지금재생: <b>{this.props.currentVideoDetails}</b> </span>
                <span className="currentHeader"> <span className="cancelBtn"> 최소 </span></span>
            </span>
          </div>
          <div className="reserveContainer">
            <span className="reservedHeader"> 예약: </span>
            <span className="reserveBody">{processedList}</span>
          </div>
      </div>
    );
  }
}