import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Empty from './Empty.component';

import './style-index.css';

/**
 * @NOTE Current GET method is set to LOCAL Backend server
 *
 * @TODO Mobile: Have Title and Artist only, click on to expand and show more details
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
    let message = '';

    if(this.state.songList.length == 0){
      message =  <Empty/>
    }

    return (
      <div className="tableContainer">
        <h2> 노래방 데이터</h2>
          <table className="mytable" style={{ marginTop: 20 }}>
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
          {message}
      </div>
    );
  }
}