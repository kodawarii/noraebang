import React, { Component } from 'react';

class TableRowForNoraebang extends Component {

    handleClick() {
    
    this.props.makeReservation(this.props.obj.artist, this.props.obj.song_name, this.props.obj.URL);
  } 

  render() {
    let reserve;

    if(this.props.obj.URL !== ""){
      reserve = 
      <span className="youtubelink">
        <span href="#" onClick={this.handleClick.bind(this)} className="youtubeLink">예약</span>
      </span>
    }

    return (
        <tr>
          <td>
            {this.props.obj.artist}
          </td>
          <td>
            {this.props.obj.song_name}
          </td>
          <td>
            {reserve}
          </td>
        </tr>
    );
  }
}

export default TableRowForNoraebang;