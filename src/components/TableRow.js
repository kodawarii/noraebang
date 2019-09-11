import React, { Component } from 'react';

class TableRow extends Component {

  handleClick() {
    //window.location.assign(this.props.obj.URL, '_blank');
    window.open(this.props.obj.URL, '_blank');
    console.log("the youtube link: " + this.props.obj.URL);
  } 

  render() {

    let youtube;

    if(this.props.obj.URL !== ""){
      youtube = 
      <span className="youtubelink">
        <span href="#" onClick={this.handleClick.bind(this)} className="youtubeLink">Youtube</span>
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
            {youtube}
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