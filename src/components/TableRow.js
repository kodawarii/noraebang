import React, { Component } from 'react';

class TableRow extends Component {

  constructor(props) {
        super(props);
  }

  handleClick() {
    //window.location.assign(this.props.obj.URL, '_blank');
    window.open(this.props.obj.URL, '_blank');
  } 

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.artist}
          </td>
          <td>
            {this.props.obj.song_name}
          </td>
          <td>
            <span className="youtubelink">
              <a href="#" onClick={this.handleClick.bind(this)} className="youtubeLink">Youtube</a>
            </span>
          </td>
          <td>
            {this.props.obj.length}
          </td>
          <td>
            {this.props.obj.key}
          </td>
          <td>
            {this.props.obj.max_key}
          </td>
          <td>
            {this.props.obj.tj_number}
          </td>
          <td>
            {this.props.obj.ky_number}
          </td>
          <td>
            {this.props.obj.order}
          </td>
        </tr>
    );
  }
}

export default TableRow;