import React, { Component } from 'react';

class TableRowSmallDetailed extends Component {

  render() {
    return (
        <tr onClick={this.props.showDetails}>
          <td className="songname">
            <b>{this.props.obj.song_name}</b>
            <br/>
            {this.props.obj.artist}
          </td>
          <td>
            {this.props.obj.tj_number}
          </td>
          <td>
            {this.props.obj.max_key}
          </td>
          <td>
            {this.props.obj.order}
          </td>
        </tr>
    );
  }
}

export default TableRowSmallDetailed;