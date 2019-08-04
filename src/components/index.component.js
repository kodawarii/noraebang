import React, { Component } from 'react';
import axios from 'axios';

// Components
import TableRow from './TableRow';
import TableRowSmall from './TableRowSmall';
import Empty from './Empty.component';
import SortArrow from './SortArrow';

// Stylesheets
import './style-index.css';

export default class Index extends Component {

  constructor(props) {
    super(props);

    //// API Links:
    //// https://calm-anchorage-40334.herokuapp.com/song or http://localhost:4000/song
    this.state = {
      songList: [],
      baseURL: 'http://localhost:4000/song'
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

  handleSortLength(order){
    if(order === "asc"){
      axios.get(this.state.baseURL+'/length_sort_asc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else if(order === "desc"){
      axios.get(this.state.baseURL+'/length_sort_desc/')
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

  handleSortKey(order){
    if(order === "asc"){
      axios.get(this.state.baseURL+'/key_sort_asc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else if(order === "desc"){
      axios.get(this.state.baseURL+'/key_sort_desc/')
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

  handleSortHighestNote(order){
    if(order === "asc"){
      axios.get(this.state.baseURL+'/max_key_sort_asc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else if(order === "desc"){
      axios.get(this.state.baseURL+'/max_key_sort_desc/')
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

  handleSortTJ(order){
    if(order === "asc"){
      axios.get(this.state.baseURL+'/tj_number_sort_asc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else if(order === "desc"){
      axios.get(this.state.baseURL+'/tj_number_sort_desc/')
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

  handleSortKY(order){
    if(order === "asc"){
      axios.get(this.state.baseURL+'/ky_number_sort_asc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else if(order === "desc"){
      axios.get(this.state.baseURL+'/ky_number_sort_desc/')
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

  handleSortOrder(order){
    if(order === "asc"){
      axios.get(this.state.baseURL+'/order_sort_asc/')
      .then(response => {
        this.setState({ songList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else if(order === "desc"){
      axios.get(this.state.baseURL+'/order_sort_desc/')
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

  //// Getting Table Rows ////
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
                <th> 가수 <SortArrow clickButton={this.handleSortArtist.bind(this)}/></th>
                <th> 재목 <SortArrow clickButton={this.handleSortTitle.bind(this)}/></th>
                <th> URL </th>
                <th> 길이 <SortArrow clickButton={this.handleSortLength.bind(this)}/></th>
                <th> 키 <SortArrow clickButton={this.handleSortKey.bind(this)}/></th>
                <th> 최고음 <SortArrow clickButton={this.handleSortHighestNote.bind(this)}/></th>
                <th> TJ번호 <SortArrow clickButton={this.handleSortTJ.bind(this)}/></th>
                <th> KY번호 <SortArrow clickButton={this.handleSortKY.bind(this)}/></th>
                <th> 순 <SortArrow clickButton={this.handleSortOrder.bind(this)}/></th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>

          <table className="mytable-s">
            <thead>
              <tr>
                <th> 재목/가수 <SortArrow clickButton={this.handleSortTitle.bind(this)}/></th>
                <th> TJ번호 <SortArrow clickButton={this.handleSortTJ.bind(this)}/></th>
                <th> 최고음 <SortArrow clickButton={this.handleSortHighestNote.bind(this)}/></th>
                <th> 순 <SortArrow clickButton={this.handleSortOrder.bind(this)}/></th>
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