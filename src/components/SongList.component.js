import React, { Component } from 'react';
import axios from 'axios';

// Components
import TableRowForNoraebang from './TableRowForNoraebang';
import Empty from './Empty.component';
import SortArrow from './SortArrow';

// Stylesheets
import './style-SongList.css';

export default class SongList extends Component {

  constructor(props) {
    super(props);

    //// API Links:
    //// https://calm-anchorage-40334.herokuapp.com/song or http://localhost:4000/song
    this.state = {
      songList: [],
      baseURL: 'https://calm-anchorage-40334.herokuapp.com/song',
    };
  }

  //// GET Default List
  componentDidMount(){
    axios.get(this.state.baseURL+'/')
    .then(response => {
      this.setState({ songList: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  //// SORTING ////
  handleSortArtist(order){
    if(order === "asc"){
      axios.get(this.state.baseURL+'/artist_sort_asc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }    
    else if(order === "desc"){
      axios.get(this.state.baseURL+'/artist_sort_desc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      console.log("");
    }
  }

  handleSortTitle(order){
    if(order === "asc"){
      axios.get(this.state.baseURL+'/song_name_sort_asc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else if(order === "desc"){
      axios.get(this.state.baseURL+'/song_name_sort_desc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      console.log("");
    }
  }

  //// OTHERS
  makeReservation(artist, songname, id){
    this.props.makeReservation(artist, songname, id);
  }

  //// Getting Table Rows ////
  tabRow(){
    let myfunction = this.makeReservation.bind(this);
    return this.state.songList.map(function(object, i){
        
        return <TableRowForNoraebang obj={object} key={i} makeReservation={myfunction.bind(this)}/>;
    });
  }

  render() {
    let message = '';

    if(this.state.songList.length === 0){
      message =  <Empty/>
    }

    return (
      <div className="tableContainer-sl">
        <h4> 노래책 </h4>
        <div> 
          <p>
            <input className="searchbar" type="text" placeholder="검색" />
            <span className="schBtnContainer"><button className="searchBtn"> 검색 </button></span>
          </p>
        </div>
        <table className="mytable-sl">
          <thead>
            <tr>
              <th> 가수 <SortArrow clickButton={this.handleSortArtist.bind(this)}/></th>
              <th> 재목 <SortArrow clickButton={this.handleSortTitle.bind(this)}/></th>
              <th> 예약 </th>
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