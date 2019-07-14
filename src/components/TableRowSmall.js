import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
  }

  delete() {
    axios.get('http://localhost:4000/song/delete/'+this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }

  handleClick() {
    //window.location.assign(this.props.obj.URL, '_blank');
    window.open(this.props.obj.URL, '_blank');
  } 

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.song_name}
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

export default TableRow;