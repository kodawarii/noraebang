import React, { Component } from 'react';
import axios from 'axios';

class TableRowSmall extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
  }

  handleClick() {
    //window.location.assign(this.props.obj.URL, '_blank');
    window.open(this.props.obj.URL, '_blank');
  } 

  render() {
    return (
        <tr>
          <td>
            <b>{this.props.obj.song_name}</b>
            <br/>
            {this.props.obj.artist}
          </td>
          <td>
            {this.props.obj.length}
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

export default TableRowSmall;