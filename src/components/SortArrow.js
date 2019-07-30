import React, { Component } from 'react';

import './style-sort-arrow.css';

class SortArrow extends Component {

  constructor(props){
    super(props);

    this.state = {AscendingOrder: false};
  }

  handleBtnClick(){
    if(this.state.AscendingOrder){
      this.props.clickButton("asc");
      this.setState({AscendingOrder: false});
    }
    else{
      this.props.clickButton("desc");
      this.setState({AscendingOrder: true});
    }
  }

  render() {
    return (
       <span onClick={this.handleBtnClick.bind(this)}>
        &#x2195;
       </span>
    );
  }
}

export default SortArrow;