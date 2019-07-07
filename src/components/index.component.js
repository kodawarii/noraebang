import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

import './style-index.css';

/**
 * Current GET method is set to Local Backend server
 */

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {songList: []};
  }

  componentDidMount(){
    axios.get('http://localhost:4000/song')
    .then(response => {
      this.setState({ songList: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  tabRow(){
    return this.state.songList.map(function(object, i){
        return <TableRow obj={object} key={i} />;
    });
  }


  render() {
    return (
      <div>
       <h3 align="center">노래방 데이터</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>가수</th>
                <th>재목</th>
                <th>URL</th>
                <th>길이</th>
                <th>키</th>
                <th>최고음</th>
                <th>TJ번호</th>
                <th>KY번호</th>
                <th>순</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
      </div>
    );
  }
}