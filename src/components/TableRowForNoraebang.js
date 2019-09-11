import React, { Component } from 'react';

class TableRowForNoraebang extends Component {

  handleClick() {
    console.log("예약 하는중");
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