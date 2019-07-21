import React, { Component } from 'react';
import axios from 'axios';

// Components
import TableRow from './TableRow';
import TableRowSmall from './TableRowSmall';
import Empty from './Empty.component';
import SortArrow from './SortArrow';

// Stylesheets
import './style-index.css';

/**
 * 
 * [DONE] @TODO Mobile: Have Title and Artist only
 * @TODO Mobile: Click on item to expand and view more details
 * [DONE] @TODO Mobile: Table Header obstructed texts
 * [DONE] @TODO Loading page splash animation
 * [Not-required] @TODO Top Nav left and right padding for A4 document feel
 * @TODO Table headers to stay at top of page when scrolled past down it
 * [DONE] @TODO Nav 'Selected' bottom-border styling
 * @TODO Prod Page shows empty page when going to '/' page
 * @TODO Sorting - There are so many different ways to do this lol - Arrows/Dropdown selection (Execute in front end/back end, store in db or store in component states) etc
 * 
 */

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {songList: []};
  }

  componentDidMount(){
    axios.get('https://calm-anchorage-40334.herokuapp.com/song') // https://calm-anchorage-40334.herokuapp.com/song or http://localhost:4000/song
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

  tabRow_s(){
    return this.state.songList.map(function(object, i){
        return <TableRowSmall obj={object} key={i} />;
    });
  }

  render() {
    let message = '';

    if(this.state.songList.length === 0){
      message =  <Empty/>
    }

    return (
      <div className="tableContainer">
        <h2> 노래방 데이터</h2>
          <table className="mytable">
            <thead>
              <tr>
                <th>가수 <SortArrow/></th>
                <th>재목 <SortArrow/></th>
                <th>URL <SortArrow/></th>
                <th>길이 <SortArrow/></th>
                <th>키 <SortArrow/></th>
                <th>최고음 <SortArrow/></th>
                <th>TJ번호 <SortArrow/></th>
                <th>KY번호 <SortArrow/></th>
                <th>순 <SortArrow/></th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>

          <table className="mytable-s">
            <thead>
              <tr>
                <th>재목/가수 <SortArrow/></th>
                <th>TJ번호 <SortArrow/></th>
                <th>최고음 <SortArrow/></th>
                <th>순 <SortArrow/></th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow_s() }
            </tbody>
          </table>
          {message}
      </div>
    );
  }
}