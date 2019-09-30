import React, { Component } from 'react';

class TableRowForNoraebang extends Component {

  constructor(props){
    super(props);

    this.state = {
      classes: "reserve"
    }
  }

  handleClick() {
    this.props.makeReservation(this.props.obj.artist, this.props.obj.song_name, this.props.obj.URL);
  } 

  render() {
    let reserve;

    if(this.props.obj.URL !== ""){
      reserve = <span href="#" onClick={this.handleClick.bind(this)} className={this.state.classes}> ▷ </span>
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