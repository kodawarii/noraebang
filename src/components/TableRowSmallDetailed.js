import React, { Component } from 'react';

class TableRowSmallDetailed extends Component {

    handleClick() {
        //window.location.assign(this.props.obj.URL, '_blank');
        window.open(this.props.obj.URL, '_blank');
    } 

  render() {

    let ky;
    if(typeof this.props.obj.ky_number === 'number'){
        ky = "KY " + this.props.obj.ky_number;
    }
    else{
        ky = "";
    }

    let youtube;

    if(this.props.obj.URL !== ""){
      youtube = 
      <span className="youtubelink">
      <span href="#" onClick={this.handleClick.bind(this)} className="youtubeLink">Youtube</span>
      </span>
    }

    return (
        <tr onClick={this.props.triggerDetails}>
          <td className="songname">

            <b>{this.props.obj.song_name}</b> <br/>
            {this.props.obj.artist} <br/>
            <p>키 ({this.props.obj.key}) 길이 ({this.props.obj.length})</p>
            <p> {youtube} </p>

          </td>
          <td>

            {this.props.obj.tj_number} <br/><br/>
            <p> {ky} </p>

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